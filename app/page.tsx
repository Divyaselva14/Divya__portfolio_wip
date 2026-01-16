import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Skills } from "@/components/sections/Skills";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Footer } from "@/components/sections/Footer";
import { GitHubHeatmap } from "@/components/sections/GitHubHeatmap";
import { PageView } from "@/components/sections/PageView";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Centered column layout matching reference design */}
      <div className="max-w-[690px] mx-auto px-4 sm:px-6">
        {/* Theme toggle & Page view - top right */}
        <div className="flex justify-between items-center py-3">
          <PageView />
          <ThemeToggle />
        </div>

        {/* All sections in single column */}
        <div className="space-y-4">
          <Hero />

          {/* Dotted border separator */}
          <div className="h-px w-full text-border dotted-border-top" />

          <SocialLinks />

          <div className="h-px w-full text-border dotted-border-top" />

          <GitHubHeatmap />

          <div className="h-px w-full text-border dotted-border-top" />

          <Experience />

          <div className="h-px w-full text-border dotted-border-top" />

          <Projects />

          <div className="h-px w-full text-border dotted-border-top" />

          <Blog />

          <div className="h-px w-full text-border dotted-border-top" />

          <Skills />

          <div className="h-px w-full text-border dotted-border-top" />

          <Footer />
        </div>
      </div>
    </main>
  );
}
