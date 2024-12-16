// app/api/sendMail/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { fullName, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service
    auth: {
      user: process.env.SMPT_EMAIL, // Use environment variables for sensitive info
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: email, // Replace FormData.email with just email
    to: "wordassemblyhq@gmail.com", // Your email address
    subject: "Contact Inquiry",
    html: `
      <h1>Contact Inquiry from ${fullName}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error sending email." }), {
      status: 500,
    });
  }
}
