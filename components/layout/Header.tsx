"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Writing", href: "#blog" },
  { name: "Skills", href: "#skills" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      style={{
        backgroundColor: isScrolled
          ? "var(--background)"
          : "transparent",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        style={{
          opacity: isScrolled ? 1 : headerOpacity,
        }}
      >
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "border border-border bg-background/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#"
            className="font-bold text-lg hover:text-accent transition-colors"
          >
            {personalInfo.name.split(" ")[0]}
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </motion.div>
    </motion.header>
  );
}
