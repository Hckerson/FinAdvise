"use server";
import prisma from "@/prisma/connections";

export async function POST(request: Request) {
  const body =  await request.json()
  const {email} = body
  const user = await prisma.user.findUnique({where : {email : email}})
  if (user == null){
    return Response.json({message: 'success', status : 200})
  }
  return Response.json({message: 'failed', status : 400})
}
