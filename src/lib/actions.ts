"use server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'alifsakib@gmail.com',
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });
    return { message: "Thank you for your message! I'll get back to you soon.", errors: null };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      message: "Something went wrong and I couldn't send your message. Please try again later.",
      errors: null,
    };
  }
}
