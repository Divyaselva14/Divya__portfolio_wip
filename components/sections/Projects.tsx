"use client";

import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

// Add status field to project data
interface ProjectWithStatus extends Project {
  status?: "live" | "building" | "planned";
}

export function Projects() {
  // Cast projects to include status
  const projectsWithStatus = projects as ProjectWithStatus[];

  return (
    <section className="py-2">
      <h2 className="text-lg font-bold mb-3">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsWithStatus.map((project, index) => {
          // Assign status based on index for demo (customize in data/portfolio.ts later)
          const status = project.status || (index === 0 ? "live" : index === 1 ? "building" : undefined);

          return (
            <article
              key={project.id}
              className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-200 group"
            >
              {/* Project preview frame */}
              <div className="relative h-40 bg-muted border-b border-border overflow-hidden">
                {/* Background placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/10">
                  {project.title.split(" ")[0].charAt(0)}
                </div>

                {/* Status indicator */}
                {status && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium">
                    <span
                      className={`w-1.5 h-1.5 rounded-full status-pulse ${
                        status === "live"
                          ? "bg-success"
                          : status === "building"
                          ? "bg-warning"
                          : "bg-muted-foreground"
                      }`}
                    />
                    <span className="capitalize">{status}</span>
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-1 flex-shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
