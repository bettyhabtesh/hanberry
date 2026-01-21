import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { fullname, phone, date, quantity, packageName, packagePrice, packageType, duration} = await req.json();
    console.log('Received data:', req);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: "Hanberry Beauty",
      to: 'frehiwot.tewodros112@gmail.com', // 👈 RECEIVER (FIXED)
      subject: 'Hanberry Beauty Booking Form Submission',
      html: `
        <div>
          <h3>New Form Submission</h3>
          <p><b>fullname:</b> ${fullname}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>date:</b> ${date}</p>
          <p><b>quantity:</b> ${quantity}</p>
          <p><b>Package Name:</b> ${packageName}</p>
          <p><b>Package Price:</b> ${packagePrice}</p>
          <p><b>Package Type:</b> ${packageType}</p>
          <p><b>Duration:</b> ${duration}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Email failed' },
      { status: 500 }
    )
  }
}
