"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Check, Copy, Send } from "@/components/Icons";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mds535913@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:mds535913@gmail.com?subject=Contact from ${encodeURIComponent(
      name
    )} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <AnimatedSection id="contact" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
            Get in Touch
          </h2>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Open to opportunities
                  </span>
                </div>
                <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                  Let's create something together!
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  Have an open role, project concept, or just want to connect? Send an email or message through LinkedIn. I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Direct Links */}
              <div className="flex flex-col gap-4">
                {/* Email Row with Copy */}
                <div className="flex items-center justify-between gap-3 p-3 bg-background rounded-xl border border-border/40 hover:border-primary/30 transition-all">
                  <a
                    href="mailto:mds535913@gmail.com"
                    className="flex items-center gap-3 text-sm text-text-primary hover:text-primary transition-colors min-w-0"
                  >
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">mds535913@gmail.com</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg border border-border/50 bg-surface text-text-muted hover:text-primary hover:border-primary/40 transition-all flex-shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Mobile Link */}
                <a
                  href="tel:+916202789277"
                  className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border/40 hover:border-primary/30 transition-all text-sm text-text-primary hover:text-primary"
                >
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>+91 6202789277</span>
                </a>
              </div>

              {/* Social Badges */}
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://linkedin.com/in/md-shahbaz-653b1a322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-background border border-border/60 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-surface font-sans font-semibold text-xs transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/shah6202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-background border border-border/60 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-surface font-sans font-semibold text-xs transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-text-primary" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-sm h-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border border-border/60 px-4 py-2.5 rounded-xl text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-text-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-border/60 px-4 py-2.5 rounded-xl text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wider">
                  Message
                  </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background border border-border/60 px-4 py-2.5 rounded-xl text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-text-primary resize-none"
                  placeholder="Hey Shahbaz, let's catch up..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-fit self-end px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
