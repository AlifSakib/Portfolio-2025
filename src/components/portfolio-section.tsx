"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with Next.js, Redux for state management, and Stripe for payments.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Next.js", "E-commerce"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Redux", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects, built with Framer Motion for smooth animations.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
  {
    title: "Weather App",
    description: "A simple and clean weather application that provides real-time weather data using a third-party API.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    title: "Landing Page for SaaS",
    description: "A responsive and high-converting landing page for a software-as-a-service product.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
  {
    title: "Blogging Platform",
    description: "A content management system for bloggers with a markdown editor and static site generation.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "CMS", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
];

const categories = ["All", "React", "Next.js"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Portfolio</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A selection of my recent work. Explore the projects I'm passionate about.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${activeCategory === category ? 'bg-primary text-primary-foreground' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title + index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-4">
                      <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" data-ai-hint="website screenshot" />
                    </div>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkIcon className="w-6 h-6" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
