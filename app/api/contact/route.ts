import { contactEmail } from '@/components/emailtemplate/contactmessage';
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { useremail, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: "Hanberry Beauty Website",
      to: 'frehiwot.tewodros112@gmail.com',
      subject: 'Hanberry Beauty Contact Form Message',
      html:  contactEmail({
        useremail, message
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Sending message failed, try again' },
      { status: 500 }
    )
  }
}
