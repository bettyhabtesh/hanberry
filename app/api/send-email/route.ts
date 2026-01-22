import { bookingSummaryEmail } from '@/components/emailtemplate/bookingsummary';
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { fullname, phone, date, quantity, packageName, packagePrice, includes, duration } = await req.json();
    console.log('Received data:', req);

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
      subject: 'Hanberry Beauty Booking Form Submission',
      html:  bookingSummaryEmail({
        fullname, phone, date, quantity, packageName, packagePrice, includes, duration
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Booking failed' },
      { status: 500 }
    )
  }
}
