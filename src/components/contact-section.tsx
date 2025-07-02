"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      // Create mailto link for static deployment
      const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
      const mailtoLink = `mailto:alifsakib@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled.",
      });
      form.reset();
    } catch (error) {
       toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/alifsakib/", name: "LinkedIn" },
    { icon: Github, href: "https://github.com/AlifSakib", name: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-headline text-2xl font-semibold mb-6">Send me a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          <motion.div
            
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                  <p><strong>Email:</strong> alifsakib@gmail.com</p>
                  <p><strong>Location:</strong> Dhaka, Bangladesh</p>
                  <p>Feel free to reach out via email or connect with me on social media. I&apos;m always open to discussing new projects and opportunities.</p>
              </div>
            </div>
            <div>
              <h4 className="font-headline text-xl font-semibold mt-12 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
