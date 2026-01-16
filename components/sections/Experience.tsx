"use client";

import { experiences } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-2">
      <h2 className="text-lg font-bold mb-3">Experience</h2>
      <div className="space-y-3">
        {experiences.map((exp) => {
          const isExpanded = expandedIds.includes(exp.id);

          return (
            <article
              key={exp.id}
              className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-200"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-4 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company} · {exp.period}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.impact.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase text-muted-foreground tracking-wide">
                        Impact
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.impact.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground/80 flex gap-2"
                          >
                            <span className="text-accent mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
