"use client";

import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-bold mb-4">Skills & Technologies</h2>

      <div className="space-y-3">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs border border-border rounded-md hover:bg-muted hover:border-accent transition-colors duration-200 cursor-default font-mono bg-neutral-50 dark:bg-neutral-950/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dotted journal background decoration */}
      <div className="mt-6 p-4 rounded-lg border border-dashed border-border bg-muted/30">
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-px bg-gradient-to-r from-border via-border to-transparent opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
