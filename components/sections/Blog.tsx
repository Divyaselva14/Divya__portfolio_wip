"use client";

import { Calendar, Eye } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { formatViews } from "@/lib/analytics";

export function Blog() {
  return (
    <section className="py-2">
      <h2 className="text-lg font-bold mb-3">Writing</h2>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-border rounded-lg p-4 hover:border-accent transition-colors duration-200 group"
          >
            <a href={`/blog/${post.slug}`} className="block space-y-2">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {formatViews(post.views)}
                </span>
                <span>{post.readTime}</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
