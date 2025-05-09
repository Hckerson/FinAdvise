import { totp } from "otplib";
import { authenticator } from "otplib";
import { sendMessage } from "@/app/api/services/nodemailer/send_message";
import prisma from "@/prisma/connections";

export async function enable2FA(userId: string, email: string) {
  const secret = authenticator.generateSecret();
  totp.options = { digits: 6 };
  try {
    const code = totp.generate(secret);

    await sendMessage(
      email,
      "Your 2FA Verification Code",
      `Your verification code is ${code}. This code will expire in 2 minutes.`,
      code
    );

    // const isValid = totp.check(token, secret);
    await prisma.session.update({
      where: { userId: userId },
      data: {
        otpEnabled: true,
      },
    });
    return { success: true, message: "2FA enabled successfully" };
  } catch (error) {
    console.log(error);
    // Handle error (e.g., show a message to the user)
    return { success: false, message: "Failed to generate OTP" };
  }
}
