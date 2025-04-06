import Contact from "@/mails/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resent = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const { error } = await resent.emails.send({
    from: "service@angelmaldonado.me",
    to: "amaldonadojuarez@gmail.com",
    subject: "AyE | Nuevo cliente",
    react: Contact({ name, email, phone, message }),
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }

  return NextResponse.json({ message: "Message sent successfully" });
}
