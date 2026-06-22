import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jellive",
    icon: Github,
    bgColor: "bg-foreground",
    textColor: "text-background",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/han-goon-yoo-429980113/",
    icon: Linkedin,
    bgColor: "bg-primary",
    textColor: "text-foreground",
  },
  {
    label: "Email",
    href: "mailto:jellive7@gmail.com",
    icon: Mail,
    bgColor: "bg-secondary",
    textColor: "text-foreground",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-4 border-foreground overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute bottom-10 right-20 w-32 h-32 border-4 border-accent rotate-12 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-10 w-24 h-24 bg-primary/10 -rotate-6 hidden lg:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-5">
            <Link href="/" className="group inline-block">
              <div className="relative">
                <div className="px-6 py-3 bg-foreground text-background font-mono font-bold text-2xl border-4 border-foreground transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <Terminal className="inline-block w-5 h-5 mr-2" />
                  JELL
                </div>
                <div className="absolute inset-0 bg-accent -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200" />
              </div>
            </Link>
            <p className="text-lg leading-relaxed max-w-md">
              <span className="font-bold text-foreground">
                Full-stack developer
              </span>{" "}
              <span className="text-muted-foreground">
                building modern web and mobile applications with a focus on user
                experience and performance.
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="text-muted-foreground">Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span className="text-muted-foreground">and</span>
              <span className="font-bold">Next.js 14</span>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6 lg:col-span-3">
            <div className="inline-block px-3 py-1 border-2 border-foreground font-mono text-xs font-bold bg-card">
              QUICK LINKS
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-bold transition-all"
                  >
                    <span className="text-primary group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span className="group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-6 lg:col-span-4">
            <div className="inline-block px-3 py-1 border-2 border-foreground font-mono text-xs font-bold bg-card">
              CONNECT
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-4 py-3 border-2 border-foreground ${link.bgColor} ${link.textColor} font-mono font-bold text-sm hover-brutal transition-all duration-200`}
                  aria-label={link.label}
                >
                  <span className="inline-flex items-center gap-2">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-4 border-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm">
              <span className="text-muted-foreground">
                &copy; {currentYear}
              </span>{" "}
              <span className="font-bold">JELL</span>{" "}
              <span className="text-muted-foreground">
                {/* All rights reserved. */}
              </span>
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-sm font-mono font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                PRIVACY
              </Link>
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
