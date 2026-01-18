"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  gameUrl?: string; // Link to the game/app store
  liveUrl?: string; // Link to demo or website
  highlights?: string[];
  company?: string; // Company you worked for (if applicable)
  isElixir?: boolean; // Highlight Elixir projects
  isCurrent?: boolean; // Currently working on this
}

// TODO: Add your actual projects here
const projects: Project[] = [
  {
    name: "Junes Journey",
    description: "Worked on backend services for a mobile game using Elixir and Phoenix",
    technologies: ["Elixir", "Phoenix", "PostgreSQL", "Redis", "AWS"],
    gameUrl: "https://www.junesjourney.com/",
    company: "Wooga",
    isElixir: true, // Highlights Elixir projects
    isCurrent: true, // Shows "Current" badge
    highlights: ["Asynchronous cooperative features", "Developing new features and maintaining existing systems"]
  },
  {
    name: "Governor of Poker",
    description: "Worked on backend and admin tools for a multiplayer mobile game using PHP and Java",
    technologies: ["PHP", "Java"],
    gameUrl: "https://www.governorofpoker.com/games/governor-of-poker-3",
    company: "Playtika",
    isElixir: false,
    isCurrent: false,
    highlights: [
      "Admin and backoffice systems for game operations",
      "Developing new features and maintaining existing systems"
    ]
  },
  {
    name: "101 Okey Plus",
    description: "Worked on game and web backend services for a turn-based multiplayer mobile game using PHP, Java, and Spring Boot",
    technologies: ["PHP", "Java", "Spring Boot", "MySQL", "Redis", "AWS"],
    company: "Peak / Zynga",
    gameUrl: "https://www.zynga.com/games/101-okey-plus/",
    isElixir: false,
    isCurrent: false,
    highlights: [
      "Game and web services supporting turn-based multiplayer gameplay",
      "Developing new features and maintaining existing backend services"
    ]
  }
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const MotionedLink = motion.create(Link);

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen w-full px-3 sm:px-10 py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="mb-8 sm:mb-12">
          <MotionedLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </MotionedLink>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl">
            A collection of backend systems and game infrastructure projects I've worked on. Currently building with <span className="text-foreground font-medium">Elixir & Phoenix</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={item}
                className="group relative backdrop-blur-sm rounded-lg p-6 border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      {project.isElixir && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/50">
                          Elixir
                        </span>
                      )}
                      {project.isCurrent && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/30 text-green-300 border border-green-700/50">
                          Current
                        </span>
                      )}
                    </div>
                    {project.company && (
                      <p className="text-xs text-muted-foreground mt-1">at {project.company}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-primary/20 bg-primary/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.gameUrl && (
                    <a
                      href={project.gameUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-red-700 to-purple-900 text-white hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Play Game
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={item}
            className="text-center py-12 text-muted-foreground"
          >
            <p className="mb-2">No projects added yet.</p>
            <p className="text-sm">
              Add your projects in <code className="text-xs bg-primary/10 px-2 py-1 rounded">components/Projects.tsx</code>
            </p>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}

