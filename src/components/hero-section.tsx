"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import profilePic from "../../assets/profile/profile_pic.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Hi, I'm <span className="text-primary">Alif Sakib</span>
            </h1>
            <p className="font-headline text-2xl md:text-3xl text-muted-foreground mb-6">
              A Frontend Developer
            </p>
            <p className="max-w-xl mx-auto md:mx-0 text-foreground/80 mb-8 leading-relaxed">
              I build modern, responsive, and engaging web applications with a focus on user experience and performance. Let's create something amazing together.
            </p>
            <div>
              <a href="#portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30"></div>
              <Image
                src={profilePic}
                alt="Alif Sakib - Professional Portrait"
                data-ai-hint="professional portrait"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl border-4 border-card z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
