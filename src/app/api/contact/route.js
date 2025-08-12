// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, company, projectType, budget, referral, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Referral:</strong> ${referral}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error }), { status: 500 });
  }
}
