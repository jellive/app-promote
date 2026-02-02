"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground transition-all duration-200",
        isScrolled && "brutal-shadow",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Go to home"
          >
            <div className="relative">
              <div className="px-4 py-2 bg-foreground text-background font-mono font-bold text-lg border-2 border-foreground transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Terminal className="inline-block w-4 h-4 mr-2" />
                JELL
              </div>
              <div className="absolute inset-0 bg-primary -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 border-2 border-foreground font-mono font-bold text-sm hover-brutal transition-all duration-200 bg-background"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-2">
            <div className="border-2 border-foreground">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border-2 border-foreground hover:bg-foreground hover:text-background"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background border-t-4 border-foreground",
          mobileMenuOpen ? "max-h-96 visible" : "max-h-0 invisible",
        )}
      >
        <nav
          className="container mx-auto px-4 py-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 border-2 border-foreground font-mono font-bold text-sm hover-brutal transition-all duration-200 bg-background stagger-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
