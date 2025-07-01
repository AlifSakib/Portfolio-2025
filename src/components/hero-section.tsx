"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            >
              Hi, I'm <span className="text-primary">Alif Sakib</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-headline text-2xl md:text-3xl text-muted-foreground mb-6"
            >
              A Frontend Developer
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="max-w-xl mx-auto md:mx-0 text-foreground/80 mb-8 leading-relaxed"
            >
              I build modern, responsive, and engaging web applications with a focus on user experience and performance. Let's create something amazing together.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "backOut" }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Alif Sakib - Professional Portrait"
                  width={400}
                  height={400}
                  priority
                  className="rounded-full object-cover shadow-2xl border-4 border-card z-10"
                  data-ai-hint="professional portrait"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
