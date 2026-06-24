"use client";

import { useEffect, useState } from "react";
import { ChevronDown, FileText, ArrowRight } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  "MCA Student",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Tester",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    const tick = () => {
      if (shouldReduceMotion) {
        // Fallback for reduced motion: static role change without character typing
        setDisplayText(currentFullText);
        timer = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return;
      }

      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 50 : 120);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, shouldReduceMotion]);

  // Framer Motion parent/child sequence variations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[200px] h-[200px] bg-secondary/15 dark:bg-secondary/5 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 z-10 w-full">
        {/* Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col text-center md:text-left items-center md:items-start"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-sans font-extrabold text-5xl md:text-7xl tracking-tight text-text-primary mb-3 select-none"
          >
            Hi, I'm{" "}
            <span className="cursor-pointer transition-all duration-500 hover:animate-signature-text dark:text-primary text-primary">
              MD Shahbaz
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-mono text-xl md:text-3xl font-bold text-secondary mb-5 h-10 md:h-12 flex items-center"
          >
            <span>{displayText}</span>
            <span className="inline-block w-[3px] h-6 md:h-8 bg-secondary ml-1 animate-pulse" />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-text-muted max-w-lg mb-8 leading-relaxed"
          >
            Building scalable systems from Patna, Bihar 🇮🇳
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl bg-surface border border-border text-text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-border/10 transition-all hover:scale-[1.02] active:scale-95"
            >
              Download Resume
              <FileText className="w-4 h-4 text-text-muted" />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Avatar Area */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
          className="flex-shrink-0 relative z-10"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-[3px] border-2 border-dashed border-primary/30 flex items-center justify-center animate-[spin_40s_linear_infinite] hover:border-solid">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-10 animate-pulse pointer-events-none" />
            <div className="w-full h-full rounded-full overflow-hidden bg-surface border-4 border-background flex items-center justify-center select-none shadow-2xl relative animate-[spin_40s_linear_infinite_reverse]">
              <span className="font-sans font-extrabold text-5xl md:text-6xl animate-signature-text">
                MS
              </span>
            </div>
          </div>
          {/* Pulsing visual circles */}
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary/15 animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/20 animate-ping" />
        </motion.div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
          Scroll Down
        </span>
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-text-muted hover:text-primary transition-colors p-1"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
