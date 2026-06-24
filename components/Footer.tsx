"use client";

import { Github, Linkedin, Mail } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram or Text */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-sans font-medium text-xs text-text-muted">
            Built with Next.js & ❤️ by MD Shahbaz
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shah6202"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-primary transition-colors focus:ring-2 focus:ring-primary/40"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/md-shahbaz-653b1a322/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-primary transition-colors focus:ring-2 focus:ring-primary/40"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:mds535913@gmail.com"
            className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-primary transition-colors focus:ring-2 focus:ring-primary/40"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-text-muted text-center md:text-right">
          &copy; 2025 MD Shahbaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
