// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        console.log('=== DEBUG INFO ===');
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? 'EXISTS (length: ' + process.env.EMAIL_PASSWORD.length + ')' : 'MISSING');
        console.log('==================');

        const { name, email, message } = await request.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASSWORD, // Your email password or app password
            },
        });

        // Email to yourself (receive contact form submissions)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #4f46e5;">New Contact Form Message</h2>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #4f46e5; border-radius: 4px;">
                ${message}
              </p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
        };

        // Auto-reply email to the sender
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #4f46e5;">Thank You for Reaching Out!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for getting in touch! I've received your message and will get back to you as soon as possible.</p>
            <p>Here's a copy of your message:</p>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #4f46e5; border-radius: 4px; margin: 20px 0;">
              ${message}
            </div>
            <p>Best regards,<br>Kaveesha Kalhari</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions);

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}