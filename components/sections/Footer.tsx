"use client";

import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 text-center">
      <p className="text-sm text-muted-foreground">
        © {currentYear} {personalInfo.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}