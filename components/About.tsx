"use client";

import { Award, BookOpen, Briefcase, GraduationCap } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    label: "CGPA",
    value: "8.17",
    desc: "Impact College",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-secondary" />,
    label: "Internships",
    value: "2",
    desc: "Dev & QA roles",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    label: "Major Projects",
    value: "2",
    desc: "Java & RDBMS core",
  },
  {
    icon: <Award className="w-5 h-5 text-secondary" />,
    label: "Hackathon",
    value: "1",
    desc: "Build & Pitch",
  },
];

const courses = [
  "Operating Systems",
  "Data Structures",
  "Algorithms",
  "AI",
  "ML",
  "Networking",
  "Databases",
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Title */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-surface border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="font-sans text-text-primary leading-relaxed text-base md:text-lg mb-4">
                I am an MCA student at Impact College Patna (2023–2025) with a strong foundation in full-stack development, database architecture, and software quality assurance. I thrive on translating complex database requirements and backend logic into intuitive web interfaces.
              </p>
              <p className="font-sans text-text-muted leading-relaxed text-sm md:text-base">
                My technical experience spans building responsive applications using the MERN stack, engineering structured Java enterprise tools with Oracle RDBMS, and ensuring reliability through functional manual testing of large-scale systems. I am motivated to create impactful, clean, and robust software solutions.
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border/60 rounded-2xl p-4 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2 bg-background rounded-xl border border-border/30 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-text-primary">
                    {stat.value}
                  </span>
                  <span className="font-sans font-semibold text-xs text-text-primary mt-1">
                    {stat.label}
                  </span>
                  <span className="font-sans text-[10px] text-text-muted mt-0.5">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Detail */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                    Education
                  </span>
                  <h3 className="font-sans font-bold text-lg text-text-primary">
                    Master of Computer Applications
                  </h3>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 pl-4 py-1 flex flex-col gap-4">
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary">
                    Impact College, Patna
                  </h4>
                  <p className="font-sans text-xs text-text-muted mt-0.5">
                    Oct 2023 – Oct 2025 | Patna, India
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/15">
                      CGPA: 8.17
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="font-sans font-bold text-xs text-text-primary uppercase tracking-wider mb-2">
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {courses.map((course, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] font-medium bg-background text-text-muted border border-border/80 px-2 py-0.5 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
