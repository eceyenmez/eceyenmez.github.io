"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
interface Skill {
  name: string;
  iconClass: string | null;
}

const skills: Skill[] = [
  { name: "Elixir", iconClass: "devicon-elixir-plain colored" },
  { name: "Phoenix", iconClass: "devicon-phoenix-original colored" },
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain colored" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "Redis", iconClass: "devicon-redis-plain colored" },
  { name: "Java", iconClass: "devicon-java-plain colored" },
  { name: "PHP", iconClass: "devicon-php-plain colored" }
];

export default function Home() {
  const container = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  // Update these with your own social links
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/eceyenmez" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/eceyenmez" }
  ];

  const MotionedLink = motion.create(Link);

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={container}
      className="relative my-auto h-full w-full px-3 sm:px-10 py-4 sm:py-10 gap-6 items-center justify-center"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Mobile: Simplified with less blur, Desktop: Full animation */}
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-700/20 via-transparent to-purple-900/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-900/20 via-transparent to-red-700/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Hide third blob on mobile for better performance */}
        <motion.div
          className="hidden md:block absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-700/10 via-purple-900/10 to-red-700/10 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column - Main Content */}
        <motion.div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <motion.div
              variants={item}
              className="inline-block"
            >
              <span className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5">
                Backend Developer
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.div
                initial="hidden"
                animate="show"
                variants={titleAnimation}
                className="w-fit mx-auto lg:mx-0"
              >
                <motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hello World, It's Ece!
                </motion.h1>
              </motion.div>
            </div>

            <motion.p
              variants={item}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Building scalable game backends with Elixir and AWS, bending code to craft exceptional gaming experiences
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="flex gap-3 sm:gap-4 pointer-events-auto justify-center lg:justify-start"
          >
            {socialLinks.map((link, index) => (
              <MotionedLink
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {link.icon}
              </MotionedLink>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="pointer-events-auto flex justify-center lg:justify-start"
          >
            <MotionedLink
              href="/projects"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-red-700 to-purple-900 text-white font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
            >
              See my projects
            </MotionedLink>
          </motion.div>
        </motion.div>

        {/* Right Column - Animated Code Block */}
        <div className="relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-purple-900/20 blur-3xl"
          />
          <motion.div
            variants={item}
          >
            <pre className="relative backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-primary/20 bg-primary/5 overflow-x-auto text-[10px] xs:text-xs sm:text-sm">
              <code className="font-mono whitespace-pre-wrap break-words">
                <span className="text-yellow-400">developer</span> = <span className="text-purple-400">%</span>{"{"}
                <br />
                {"  "}<span className="text-blue-400">name:</span> <span className="text-green-400">{"\"Ece Y.\""}</span>,
                <br />
                {"  "}<span className="text-blue-400">role:</span> <span className="text-green-400">{"\"Backend Developer\""}</span>,
                <br />
                {"  "}<span className="text-blue-400">skills:</span> {"["}
                {skills.map((skill, index) => (
                  <React.Fragment key={skill.name}>
                    <br />
                    {"    "}<span className="text-green-400">{`"${skill.name}"`}</span>
                    {index !== skills.length - 1 && ","}
                    {skill.iconClass ? (
                      <i className={`${skill.iconClass} inline-block ml-2 text-[18px] align-middle`} style={{ fontSize: '18px', verticalAlign: 'middle' }}></i>
                    ) : (
                      <span className="inline-block ml-2 text-blue-400 align-middle">⚙️</span>
                    )}
                  </React.Fragment>
                ))}
                <br />
                {"  "}{"]"},
                <br />
                {"  "}<span className="text-blue-400">passion:</span> <span className="text-green-400">{"\"Crafting high-performance game backends\""}</span>
                <br />
                {"}"}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}


