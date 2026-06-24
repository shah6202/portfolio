"use client";

import { Folder, Github, ExternalLink } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Aanganbari Management System",
    subtitle: "Digitizing Child Care Operations in Bihar",
    tech: ["Java", "Oracle", "SQL", "Swing", "JDBC"],
    github: "https://github.com/shah6202",
    points: [
      "Digitized operations of child care centers (Aanganbari) across Bihar administrative hierarchies (districts, blocks, panchayats, and villages).",
      "Implemented a secure role-based login and access management architecture.",
      "Designed a normalized relational database and built complete CRUD operations for students, staff, stock distribution, and daily attendance.",
      "Generated district-wise and village-wise statistical reports to aid government administrative monitoring.",
      "Ensured backend data integrity and workflow validations using schema constraints and manual testing.",
    ],
  },
  {
    title: "Computerized Databank System of Bihar",
    subtitle: "Demographic & Geographic Data Repository",
    tech: ["Java", "Oracle", "SQL/PLSQL", "JDBC", "Java Swing", "RDBMS"],
    github: "https://github.com/shah6202",
    points: [
      "Developed a centralized demographic databank system to capture, store, and analyze large-scale regional data.",
      "Designed a 2-tier client-server architecture with a Java Swing frontend and Oracle backend database.",
      "Structured normalized schemas covering state, district, block, village, population, land categorization, and education metrics.",
      "Built transactional forms for CRUD and analytical features with multi-table queries and stored procedures.",
      "Ensured data consistency, constraints enforcement, and reliability through strict validation checks.",
    ],
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            Key Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors" />

              <div>
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-xl text-text-primary">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-text-muted mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-background border border-border/50 text-text-muted hover:text-primary hover:border-primary/50 transition-colors focus:ring-2 focus:ring-primary/40"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] font-bold text-secondary bg-secondary/10 border border-secondary/15 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-2.5 pl-5 list-disc text-text-muted text-sm leading-relaxed mb-6">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="marker:text-primary">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="border-t border-border/60 pt-4 flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-xs text-primary hover:text-secondary transition-colors flex items-center gap-1.5 group/link"
                >
                  Explore Repository
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
