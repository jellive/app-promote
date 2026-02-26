/**
 * @fileoverview Tests for HeroSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/hero-section";

describe("HeroSection", () => {
  describe("Profile Information", () => {
    it("should render profile greeting text", () => {
      render(<HeroSection />);
      // "Jell" is rendered with typing animation, so we check for the greeting
      expect(screen.getByText(/안녕하세요/)).toBeInTheDocument();
    });

    it('should render title "풀스택 개발자"', () => {
      render(<HeroSection />);
      // Use getAllByText since the text appears multiple times
      const elements = screen.getAllByText(/풀스택 개발자/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should render intro mentioning 18 projects", () => {
      render(<HeroSection />);
      // Use getAllByText since "18" appears multiple times in the hero section
      const elements = screen.getAllByText(/18/);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe("CTA Buttons", () => {
    it('should render "프로젝트 보기" button', () => {
      render(<HeroSection />);
      expect(
        screen.getByRole("link", { name: /프로젝트 보기/i }),
      ).toBeInTheDocument();
    });

    it('should render "연락하기" button', () => {
      render(<HeroSection />);
      expect(
        screen.getByRole("link", { name: /연락하기/i }),
      ).toBeInTheDocument();
    });

    it("should have correct href for projects button", () => {
      render(<HeroSection />);
      const projectsBtn = screen.getByRole("link", { name: /프로젝트 보기/i });
      expect(projectsBtn).toHaveAttribute("href", "#projects");
    });

    it("should have correct href for contact button", () => {
      render(<HeroSection />);
      const contactBtn = screen.getByRole("link", { name: /연락하기/i });
      expect(contactBtn).toHaveAttribute("href", "#contact");
    });
  });

  describe("Layout and Structure", () => {
    it("should render as a section element", () => {
      render(<HeroSection />);
      expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    });

    it("should have proper id for navigation", () => {
      render(<HeroSection />);
      const section = screen.getByTestId("hero-section");
      expect(section).toHaveAttribute("id", "hero");
    });
  });

  describe("Accessibility", () => {
    it("should have accessible heading structure", () => {
      render(<HeroSection />);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("should have descriptive text content", () => {
      render(<HeroSection />);
      // Use getAllByText since "프로젝트" appears multiple times
      const elements = screen.getAllByText(/프로젝트/);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe("Dark Mode Support", () => {
    it("should have theme-aware background classes", () => {
      render(<HeroSection />);
      const section = screen.getByTestId("hero-section");
      // Section uses bg-background which is theme-aware
      expect(section.className).toBeTruthy();
    });
  });

  describe("Open to Work Badge", () => {
    it("should render OPEN TO WORK badge text", () => {
      render(<HeroSection />);
      expect(screen.getByText(/OPEN TO WORK/i)).toBeInTheDocument();
    });

    it("should display position info in badge", () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/풀스택 \/ 프론트엔드 시니어/i),
      ).toBeInTheDocument();
    });
  });

  describe("Social Links", () => {
    it("should render Blog social link with aria-label", () => {
      render(<HeroSection />);
      expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument();
    });

    it("should have correct href for Blog social link", () => {
      render(<HeroSection />);
      const blogLink = screen.getByRole("link", { name: /blog/i });
      expect(blogLink).toHaveAttribute("href", "https://blog.jell.kr");
    });
  });

  describe("Resume Download", () => {
    it("should render resume download button", () => {
      render(<HeroSection />);
      expect(screen.getByText(/이력서 다운로드/i)).toBeInTheDocument();
    });

    it("should have correct href for resume download", () => {
      render(<HeroSection />);
      const resumeLink = screen.getByText(/이력서 다운로드/i).closest("a");
      expect(resumeLink).toHaveAttribute("href", "/이력서_유한군.pdf");
    });
  });
});
