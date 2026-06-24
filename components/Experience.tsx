"use client";

import { Calendar, MapPin, Briefcase } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Tester",
    company: "Brand Radiator",
    duration: "Dec 2025 – Jan 2026",
    type: "Office",
    location: "Patna, India",
    points: [
      "Performed manual testing of the AIIMS Patna Student Management System to ensure functionality, usability, and reliability.",
      "Identified, documented, and reported bugs, functional issues, and UI inconsistencies across different modules.",
      "Executed test cases for student records, authentication, data entry, and workflow validation.",
      "Collaborated with the development team to verify bug fixes and regressions.",
      "Ensured system compliance with expected requirements and user scenarios.",
    ],
  },
  {
    role: "Developer",
    company: "ShipU Logistics Private Limited",
    duration: "Oct 2025 – Dec 2025",
    type: "Office",
    location: "Patna, India",
    points: [
      "Built and maintained a full-stack logistics platform using the MERN stack.",
      "Designed RESTful APIs for orders, shipment tracking, authentication, and delivery workflows.",
      "Developed responsive, reusable React components with efficient state management.",
      "Implemented JWT-based authentication with role-based access control.",
      "Optimized MongoDB schemas and queries for high-volume logistics data.",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-primary/30 flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10" />

              {/* Experience Card */}
              <div className="bg-surface border border-border/60 rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />

                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/10 rounded-2xl text-secondary border border-secondary/20 group-hover:scale-105 transition-transform duration-300">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="font-sans font-semibold text-sm text-primary mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5 bg-background border border-border/55 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-background border border-border/55 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location} ({exp.type})
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <ul className="flex flex-col gap-2.5 pl-5 list-disc text-text-muted text-sm leading-relaxed">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="marker:text-primary">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
