"use client";

import { Code, Database, Sparkles } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-5 h-5 text-primary" />,
    borderColor: "border-primary/20",
    glowColor: "hover:border-primary/50 hover:shadow-primary/5 hover:text-primary",
    skills: ["Python", "C++", "JavaScript", "Java", "SQL", "MERN Stack"],
  },
  {
    title: "Tools & Databases",
    icon: <Database className="w-5 h-5 text-secondary" />,
    borderColor: "border-secondary/20",
    glowColor: "hover:border-secondary/50 hover:shadow-secondary/5 hover:text-secondary",
    skills: ["MongoDB", "Oracle", "MySQL", "JDBC", "Git", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    borderColor: "border-primary/20",
    glowColor: "hover:border-primary/50 hover:shadow-primary/5 hover:text-primary",
    skills: [
      "Leadership",
      "Public Speaking",
      "Event Management",
      "Time Management",
      "Writing",
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            Skills Summary
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-surface border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className={`p-2.5 bg-background border ${category.borderColor} rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`font-mono text-xs font-semibold px-3 py-1.5 rounded-xl border border-border/80 bg-background/50 text-text-muted hover:bg-surface transition-all duration-300 skill-glow cursor-default ${category.glowColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
