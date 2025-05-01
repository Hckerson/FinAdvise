"use server";
import { prisma } from "@/prisma/connection";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { encrypt } from "@/lib/encryption";

export async function GET(request: Request) {
  console.log(request.method);
  const session = await auth();
  console.log(session)
  if (session == null)
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  const { user } = session;
  if (user == null)
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  const { name, email, image, firstName, lastName } = user;
  const hours = 48;
  const expiresAt = new Date(Date.now() + hours * 3600 * 1000);
  const user_email = await prisma.user.findUnique({
    where: { email: email as string },
  });
  if (user_email == null) {
    const user = await prisma.user.create({
      data: {
        email: email as string,
        username: name as string,
        firstName: firstName as string,
        lastName: lastName as string,
        status:"verified",
        localStatus: false,
        provider: "linkedin",
        profile: { create: { avatar: image as string } },
        sessions: { create: { expires: expiresAt } },
      },
      include: {
        sessions: true,
      },
    });
    const { sessions } = user;
    if (sessions) {
      const { id: sessionId, userId } = sessions[sessions.length - 1];
      const cookieStore = await cookies();
      const session = await encrypt({ sessionId, expiresAt, userId });
      cookieStore.set("l_session", session, {
        httpOnly: true,
        secure: false,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
      });
    }
  } else {
    const user = await prisma.user.findUnique({
      where: { email: email as string, localStatus : false },
    });
    if (user) {
      const { id } = user;
      const [session_data] = await prisma.session.createManyAndReturn({
        data: { userId: id, expires: expiresAt },
      });
      const { id: sessionId, userId } = session_data;
      const session = await encrypt({ sessionId, expiresAt, userId });
      const cookieStore = await cookies();

      cookieStore.set("l_session", session, {
        httpOnly: true,
        secure: false,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
      });
    }else{
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/login?error=linkedin-signin-not-allowed",
        },
      });
    }
  }
  if (session) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
      },
    });
  }
}
