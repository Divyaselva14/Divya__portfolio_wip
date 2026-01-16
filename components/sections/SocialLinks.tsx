"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useState, useEffect } from "react";

interface GitHubProfile {
  name: string;
  bio: string;
  followers: number;
  publicRepos: number;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: personalInfo.githubUrl,
    preview: "@Divyaselva14",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    isGitHub: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: personalInfo.linkedinUrl,
    preview: "Connect on LinkedIn",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: personalInfo.twitterUrl || "#",
    preview: "Follow on Twitter",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
  },
  {
    name: "Email",
    icon: Mail,
    url: `mailto:${personalInfo.email}`,
    preview: personalInfo.email,
    color: "hover:bg-red-50 dark:hover:bg-red-900/20",
  },
];

export function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [githubProfile, setGithubProfile] = useState<GitHubProfile | null>(null);
  const [loadingGitHub, setLoadingGitHub] = useState(false);

  useEffect(() => {
    if (hoveredLink === "GitHub" && !githubProfile) {
      setLoadingGitHub(true);
      fetch("https://api.github.com/users/Divyaselva14")
        .then((res) => res.json())
        .then((data) => {
          setGithubProfile({
            name: data.name || data.login,
            bio: data.bio || "Data Engineer",
            followers: data.followers,
            publicRepos: data.public_repos,
          });
          setLoadingGitHub(false);
        })
        .catch((err) => {
          console.error("Failed to fetch GitHub profile:", err);
          setLoadingGitHub(false);
        });
    }
  }, [hoveredLink, githubProfile]);

  return (
    <section className="py-4">
      <h2 className="text-lg font-bold mb-3">On the web</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          const isGitHubHovered = hoveredLink === "GitHub" && link.isGitHub;

          return (
            <div key={link.name} className="relative">
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`flex items-center gap-2 p-3 border border-border rounded-lg transition-all duration-200 ${link.color} group relative`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>

              {/* GitHub Preview Card */}
              {isGitHubHovered && githubProfile && (
                <div className="absolute -top-24 left-0 right-0 w-48 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-lg p-3 z-50 pointer-events-none animate-in fade-in duration-150 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{githubProfile.name}</p>
                      <p className="text-xs opacity-70 line-clamp-2">
                        {githubProfile.bio}
                      </p>
                      <div className="flex gap-3 mt-2 text-xs">
                        <span>
                          <strong>{githubProfile.followers}</strong> followers
                        </span>
                        <span>
                          <strong>{githubProfile.publicRepos}</strong> repos
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-neutral-100" />
                </div>
              )}

              {/* Regular Preview Tooltip */}
              {hoveredLink === link.name && !link.isGitHub && (
                <div className="absolute -top-8 left-0 right-0 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none animate-in fade-in duration-150">
                  {link.preview}
                  <div className="absolute top-full left-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-neutral-100" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
