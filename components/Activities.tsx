"use client";

import { Award, Calendar, Laptop, Target } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

const activities = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Hackathon Participant",
    desc: "Collaborated in multidisciplinary teams to design, code, and pitch functional technology solutions under strict timeline constraints.",
  },
  {
    icon: <Target className="w-6 h-6 text-secondary" />,
    title: "Volunteer, Haryana Olympics",
    desc: "Assisted in event coordination, scheduling logistics, crowd control, and managing operations for participants and officials.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "College Event Manager",
    desc: "Led the organizational planning and execution for multiple college cultural festivals, sports tournaments, and technical conferences.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-secondary" />,
    title: "ADCA Certified",
    desc: "Successfully completed the Advanced Diploma in Computer Applications covering operating systems, MS Office, and IT fundamentals.",
  },
];

export default function Activities() {
  return (
    <AnimatedSection id="activities" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            Extracurricular Activities
          </h2>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex items-start gap-4 md:gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />

              {/* Icon Container */}
              <div className="p-3.5 bg-background border border-border/50 rounded-2xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {activity.icon}
              </div>

              {/* Text Container */}
              <div className="flex flex-col gap-2 relative">
                <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
