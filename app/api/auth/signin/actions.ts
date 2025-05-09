"use server";
import prisma from "@/prisma/connections";
import { encrypt } from "@/lib/encryption";
import { redis_set } from "@/app/api/services/redis/connection";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function signIn(data: {
  email: string;
  password: string;
  rememberMe: boolean;
}) {
  //receive signin data and create session for users
  const { email, password, rememberMe } = data;
  console.log(rememberMe);
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user == null) {
      return { message: "failed", status: 400, provider: null };
    }
    const { provider } = user;
    if (provider == "google") {
      return { message: "not_local", provider: "google", status: 400 };
    } else if (provider == "linkedin") {
      return { message: "not_local", provider: "linkedin", status: 400 };
    } else if (provider == "github") {
      return { message: "not_local", provider: "github", status: 400 };
    }
    try {
      const { password: actualPassword, id } = user;
      const isPasswordValid = await bcrypt.compare(
        password,
        actualPassword as string
      );
      if (isPasswordValid) {
        const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
        const [session_data] = await prisma.session.createManyAndReturn({
          data: { userId: id, expires: expiresAt },
        });
        const { id: sessionId, userId } = session_data;

        const session = await encrypt({ sessionId, expiresAt, userId });
        const cookieStore = await cookies();

        if (rememberMe) {
          return new Response(null, {
            status: 302,
            headers: {
              location: "/verify/2fa?email=" + email
            },
          });
        } else {
          cookieStore.set("session", session, {
            httpOnly: true,
            secure: false,
            expires: expiresAt,
            sameSite: "lax",
            path: "/",
          });
          redis_set("userId", userId.toString());
          return { message: "success", status: 200, provider: "local" };
        }
      } else {
        return { message: "unAuthorized", status: 400, provider: "local" };
      }
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error("Error logging in user", error);
  }
}
