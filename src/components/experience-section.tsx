"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: "Leading the development of a large-scale e-commerce platform using Next.js and Redux. Mentoring junior developers and improving code quality and performance.",
    achievements: ["Increased site performance by 30%", "Led a team of 4 developers", "Implemented a new design system"],
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    period: "2019 - 2021",
    description: "Developed and maintained several client websites and applications using React. Collaborated with UI/UX designers to implement pixel-perfect designs.",
    achievements: ["Shipped 10+ client projects", "Improved user engagement by 15%", "Refactored legacy code to modern React"],
  },
  {
    role: "Junior Frontend Developer",
    company: "Web Crafters",
    period: "2018 - 2019",
    description: "Started my career by building responsive websites using HTML, CSS, and JavaScript. Gained foundational knowledge of web development principles and best practices.",
    achievements: ["Built 20+ static websites", "Learned React and fundamentals of SPAs", "Assisted in building a small-scale CMS"],
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  });

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Experience</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="md:grid md:grid-cols-2 md:gap-x-12 relative">
                  {/* Content */}
                  <motion.div
                    variants={itemVariants(isLeft)}
                    className={`md:col-start-${isLeft ? 1 : 2} md:row-start-1`}
                  >
                    <div className={`text-center md:text-${isLeft ? "right" : "left"}`}>
                      <div className="bg-card p-6 rounded-lg shadow-md border">
                        <p className="text-primary font-semibold">{exp.period}</p>
                        <h3 className="font-headline text-xl font-bold mt-1">{exp.role}</h3>
                        <p className="text-muted-foreground italic mb-4">{exp.company}</p>
                        <p className="text-sm mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {exp.achievements.map((ach, i) => (
                            <Badge key={i} variant="secondary">{ach}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Timeline Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full hidden md:flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
