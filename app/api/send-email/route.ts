import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, jobTitle, message,name ,budget} = body;

    // Basic validation
    if (!jobTitle || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Optional: Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    // Send email
    const response = await transporter.sendMail({
      from: email, // domain must be verified in Resend
      to:process.env.MAIL_TO || "",
      subject:jobTitle,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Job Title: ${jobTitle}</p>
      <p>Budget: ${budget}</p>
      <p>${message}</p>
      `,
    });
    return NextResponse.json({ success: true,  message: 'Email sent successfully!'  });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
