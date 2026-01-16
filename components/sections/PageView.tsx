"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function PageView() {
  const [views, setViews] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page view counter
    const storedViews = localStorage.getItem("portfolio-views");
    const currentViews = (storedViews ? parseInt(storedViews) : 0) + 1;
    localStorage.setItem("portfolio-views", currentViews.toString());
    setViews(currentViews);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm animate-pulse">
        <Eye className="w-3.5 h-3.5" />
        <span>--</span>
      </div>
    );
  }

  return (
    <div
      title="Total page views (local storage)"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-sm border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
    >
      <Eye className="w-3.5 h-3.5" />
      <span className="font-mono text-xs">{views.toLocaleString()}</span>
    </div>
  );
}
