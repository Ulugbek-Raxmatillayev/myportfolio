import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.EMAIL_PASSWORD) {
      console.error('EMAIL_PASSWORD is not set in environment variables');
      return NextResponse.json({ error: 'Email configuration is missing' }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ulugbekraxmatillayev615@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Transporter verification failed:', error);
      return NextResponse.json({ error: 'Email service configuration error' }, { status: 500 });
    }

    // Email options
    const mailOptions = {
      from: 'ulugbekraxmatillayev615@gmail.com',
      to: 'ulugbekraxmatillayev615@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 