"use client";

import { Mail, Calendar } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

import JobTitle from "./JobTitle";
import HireMeArrow from "./HireMeArrow";

export function Hero() {
  return (
    <section className="py-2">
      <div className="space-y-3">

        {/* Avatar + Hire Me Arrow */}
        <div className="relative w-24 h-24">
          <Image
            src="/me.jpg" // replace when ready
            alt={personalInfo.name}
            fill
            priority
            className="rounded-full object-cover border border-border"
          />

          {/* Editorial annotation */}
          <HireMeArrow />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold tracking-tight">
          {personalInfo.name}
        </h1>

        {/* Animated Job Title */}
        <JobTitle />

        {/* Bio */}
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm
                       border border-border rounded-lg
                       hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send an email
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm
                       border border-border rounded-lg
                       hover:bg-muted transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book intro call
          </a>
        </div>

      </div>
    </section>
  );
}

