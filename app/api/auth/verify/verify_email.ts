import nodemailer from "nodemailer";
import "dotenv/config";
import { deleteUser } from "@/lib/actions/action";
import axios from "axios";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function verifyMail(email: string, id: string) {
  if (!email || typeof email !== "string") {
    console.log("Invalid email provided");
    return;
  }

  const url = `http://localhost:3000/verify/${email}/${id}`;

  try {
    const info = await transporter.sendMail({
      from: '"Mail 👻" <corine.maggio66@ethereal.email>',
      to: email,
      subject: "Verify email ✔",
      text: "Click the link to verify your email?",
      html: `<p><b>Hello</b> to myself</p>
             <p>Click the button below to verify your email:</p>
             <a href="${url}" style="background-color: #4CAF50; color: white; padding: 12px; border-radius: 10px; text-decoration: none; display: inline-block;">Verify Email</a>`,
    });

    console.log("Message sent successfully!");
    console.log(nodemailer.getTestMessageUrl(info));
  } catch (error) {
    deleteUser(id);
    await axios.get("https://mail-opal-iota.vercel.app/api/schedule");
    await axios.get("http://localhost:3000/api/schedule");
    console.log("Error occurred:", error);
  }
}
