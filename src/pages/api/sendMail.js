export const prerender = false;
import nodemailer from "nodemailer";

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: "Please fill all required fields." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.EMAIL_USER,  
        pass: import.meta.env.EMAIL_PASS,  
      },
    });

    const mailOptions = {
      from: `"Website Contact Form" <${import.meta.env.EMAIL_USER}>`,
      replyTo: email,
      to: import.meta.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully." }), {
      status: 200,
    });

  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email.", error: error.message }),
      { status: 500 }
    );
  }
}
