"use client";

import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="group px-4 py-2 border-2 border-foreground bg-background hover-brutal transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
