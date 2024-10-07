import { EmailTemplate } from "@/ui/email-tamplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  //   const { username, subject, email, content} = await req.json();

  const formData = await req.formData();
  const username = formData.get("username") as string;
  const subject = formData.get("subject") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;
  const file = formData.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["shimayuu3412@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        username: username,
        email: email,
        content: content,
      }),
      attachments: [
        {
          //バイナリ、バッファーを渡す変換しなければならない
          content: buffer,
          filename: file.name,
        },
      ],
    });
    if (error) {
      return NextResponse.json({ error });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
