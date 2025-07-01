"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Redux", level: 85 },
  { name: "Tailwind CSS", level: 98 },
  { name: "TypeScript", level: 80 },
  { name: "Framer Motion", level: 75 },
];

const SkillProgressBar = ({ name, level }: { name: string; level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(level);
  }, [level]);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-primary" />
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A little bit about my journey and the skills I bring to the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/500x500.png"
                 alt="Alif Sakib"
                 layout="fill"
                 objectFit="cover"
                 className="hover:scale-105 transition-transform duration-300"
                 data-ai-hint="developer portrait"
               />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3"
          >
            <h3 className="font-headline text-2xl font-semibold mb-4">
              Who is Alif Sakib?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a dedicated frontend developer with a passion for creating
              intuitive, dynamic, and user-friendly web experiences. My expertise
              lies in translating complex requirements into elegant, efficient,
              and scalable solutions. With a strong foundation in modern JavaScript
              frameworks and a keen eye for design, I strive to build applications
              that are not only functional but also beautiful.
            </p>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillProgressBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
