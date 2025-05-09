import prisma from "@/prisma/connections";


export async function verifyToken(userId: string, token: string) {
  await prisma.session.update({
    where: { userId: userId },
    data: {
      otpEnabled: true,
    },
  });
}

