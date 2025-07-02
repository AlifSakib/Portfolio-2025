"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GitFork, Box } from "lucide-react";
import aboutMePic from "../../assets/profile/about_me.jpg"; // Adjust the path as necessary

const JSIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" fill="#f7df1e" rx="15"></rect><path d="m61.32 96.3c2.484 1.63 5.34 2.45 8.562 2.45 4.58 0 7.95-1.63 7.95-5.22 0-3.32-2.37-4.95-6.91-7.02l-3.37-1.52c-5.7-2.56-9.45-6.1-9.45-12.7 0-6.18 4.69-10.9 12.1-10.9 5.34 0 9.18 1.62 12.1 3.84l-5.7 7.4c-1.85-1.25-3.6-1.95-5.92-1.95-2.26 0-3.87.9-3.87 2.67 0 2.15 1.62 3.2 5.1 4.72l3.38 1.52c7.2 3.24 10.9 6.68 10.9 13.2 0 7.28-5.1 11.9-13.7 11.9-6.32 0-11.2-2.26-14.7-4.72z"></path><path d="m89.3 98.2c3.5 0 6.01-2.43 6.01-5.7v-35.3h10.4v35.4c0 9.34-6.89 14.8-16.4 14.8-8.16 0-14.1-5.02-16.1-12.4l9.04-3.66c1.2 4.09 4.3 6.32 7.05 6.32z"></path></svg>
  );
  
const TSIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" fill="#3178c6" rx="15"></rect><path fill="#fff" d="M78.6,83.8H59.4V62.1h-8.9v-9.1H78.7a16.49,16.49,0,0,0-5.4-11.3,16.06,16.06,0,0,0-11-4.2H38.2V28.3H81.3V37.5h-9.9v1.2a14.54,14.54,0,0,1,10.6,13.6,13.43,13.43,0,0,1-3.6,9.5,14.5,14.5,0,0,1-9.8,4.7H68.5v17.3h10.1Z"></path><path fill="#fff" d="M91.1 28.3H52.5v9.2h38.6z"></path></svg>
);
  
const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0l110.85 64v128L128 256 17.15 192V64L128 0z" fill="#339933"></path><path d="M128 24.31L35.7 75.48v105.04L128 231.69l92.3-51.17V75.48L128 24.31z" fill="#fff"></path><path d="M189.06 176.43a32.32 32.32 0 01-14.86 11.83c-11.23 6-27.42 6.64-32.22 6.89l-2.73.15c-1.22.06-2.8.1-4.73.1h-.25c-6.8 0-13.8-1.55-19.46-4.52a28.4 28.4 0 01-13.84-13.4c-4.46-9-4.7-22.3-1-31.13 2.6-6.27 8.3-12.8 15.65-17.15a40.33 40.33 0 0113.68-6.1c3.85-1 8.5-1.93 13.88-2.67l2.12-.29c1-.13 2.1-.23 3.3-.3h.2c4.4.1 8.3.6 11.7 1.4a29.8 29.8 0 0116.6 8.5c5.3 5.4 8.2 12.9 8.2 21.6-.2 10.3-4.5 19.8-12.2 26.3m-15.65-38.35c-2-2-4.5-3.3-7.5-4a15.8 15.8 0 00-6.4-1c-2.8.2-5.7.7-8.5 1.5-7.3 2-14.5 6.6-18.4 13.5-3.3 5.8-3.4 15.6-.2 21.6a14.7 14.7 0 0013.9 9.9c4.9.8 10.4.7 14.5-.7s7.5-3.8 10-6.3a17 17 0 005.1-11.9c.2-5.6-1.5-10.7-6.5-14.1z" fill="#339933"></path></svg>
);
  
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
      </svg>
);
  
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 0L96 48L48 96L0 48L48 0Z" fill="black"/>
        <path d="M69.6739 67.5V28.5H62.5109V59.4341L41.3261 28.5H33.5652V67.5H40.7283V36.5659L61.913 67.5H69.6739Z" fill="white"/>
        <path d="M75 28.5V67.5H69.6739V28.5H75Z" fill="white"/>
      </svg>
);
  
const CppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#00599c"/>
      <text x="50" y="65" fontSize="50" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">C++</text>
    </svg>
);
  
const ReduxIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill="#764ABC" d="M14.28,3.06c-1.3-1.29-3.03-2.01-4.9-2.01s-3.6,0.72-4.9,2.01C3.19,4.35,2.47,6.08,2.47,7.95c0,0.49,0.06,0.96,0.18,1.42l3.24-3.24c-0.09-0.23-0.14-0.48-0.14-0.74c0-1.28,1.04-2.32,2.32-2.32s2.32,1.04,2.32,2.32c0,0.27-0.05,0.52-0.14,0.74l3.24,3.24c0.12-0.46,0.18-0.93,0.18-1.42C15.81,6.08,15.58,4.35,14.28,3.06z M9.17,17.22c1.87,0,3.6-0.72,4.9-2.01c1.3-1.29,2.02-3.02,2.02-4.89c0-0.49-0.06-0.96-0.18-1.42l-3.24,3.24c0.09,0.23,0.14,0.48,0.14,0.74c0,1.28-1.04,2.32-2.32-2.32s-2.32-1.04-2.32-2.32c0-0.27-0.05,0.52-0.14-0.74L4.81,9.48C4.69,9.94,4.63,10.41,4.63,10.9C4.63,14.19,6.6,17.22,9.17,17.22z"></path>
      </svg>
);
  

const skills = [
    { name: "JavaScript", icon: JSIcon },
    { name: "TypeScript", icon: TSIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "C++", icon: CppIcon },
    { name: "Git", icon: GitFork },
    { name: "Docker", icon: Box },
    { name: "Redux", icon: ReduxIcon },
  ];
  
export default function AboutSection() {
    return (
      <section id="about" className="py-20 lg:py-32 bg-secondary">
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
                   src={aboutMePic}
                   priority
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
              <h4 className="font-headline text-xl font-semibold mb-6">My Skills</h4>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-3 bg-background border rounded-lg w-24 h-24 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    <skill.icon className="h-10 w-10 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
