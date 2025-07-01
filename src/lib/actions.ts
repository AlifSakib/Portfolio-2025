"use server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // Here you would normally send an email, save to a database, etc.
  // For this example, we'll just simulate a success response.
  console.log("Form data submitted:", validatedFields.data);

  // You can add a delay to simulate network latency
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return { message: "Thank you for your message! I'll get back to you soon.", errors: null };
}
