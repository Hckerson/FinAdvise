"use server";
import { signUpSchema } from "../../definitions/signUpSchema";
import { State } from "@/app/signup/page";
import bcrypt from "bcryptjs";
import { prisma } from "@/prisma/connection";
import { verifyMail } from "../verify/verify_email";

const SALT = 10;

export async function signUp(previousState: State = {}, formData: FormData) {
  console.log(previousState);
  const prefix = formData.get("prefix");
  const validatedFields = signUpSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }
  const { email, password, username, phone } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, SALT);
  const phoneNumber = `${prefix}${
    phone.startsWith("0") ? phone.slice(1) : phone
  }`;
  const status = "unverified";
  const isLocal = true;

  try {
    const [client] = await prisma.user.createManyAndReturn({
      data: {
        email,
        password: hashedPassword,
        username,
        phone: phoneNumber,
        status,
        localStatus: isLocal,
      },
    });
    const { email: returnedEmail, id } = client;
    verifyMail(returnedEmail, id);
    return { message: "done", status: 200 };
  } catch (error) {
    console.error("Error registering user", error);
    return { message: "failed", status: 500 };
  }
}
