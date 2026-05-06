import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "The Ville Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "lvtheville@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <div style="margin-top: 20px;">
            <strong>Message:</strong>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error },
      { status: 500 }
    );
  }
}