/**
 * @fileoverview Tests for SkillsSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { SkillsSection } from "@/components/sections/skills-section";

describe("SkillsSection", () => {
  describe("Rendering", () => {
    it("should render as a section element", () => {
      render(<SkillsSection />);
      expect(screen.getByTestId("skills-section")).toBeInTheDocument();
    });

    it("should have proper id for navigation", () => {
      render(<SkillsSection />);
      const section = screen.getByTestId("skills-section");
      expect(section).toHaveAttribute("id", "skills");
    });

    it("should have section heading", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("should display section title", () => {
      render(<SkillsSection />);
      expect(screen.getByText(/기술 스택/i)).toBeInTheDocument();
    });
  });

  describe("Skill Categories", () => {
    it("should render 6 skill category tabs", () => {
      render(<SkillsSection />);
      const tabs = screen.getAllByRole("tab");
      expect(tabs).toHaveLength(6);
    });

    it("should have Frontend category", () => {
      render(<SkillsSection />);
      expect(
        screen.getByRole("tab", { name: /frontend/i }),
      ).toBeInTheDocument();
    });

    it("should have Backend category", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tab", { name: /backend/i })).toBeInTheDocument();
    });

    it("should have Mobile category", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tab", { name: /mobile/i })).toBeInTheDocument();
    });

    it("should have Desktop category", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tab", { name: /desktop/i })).toBeInTheDocument();
    });

    it("should have Infrastructure category", () => {
      render(<SkillsSection />);
      expect(
        screen.getByRole("tab", { name: /infrastructure/i }),
      ).toBeInTheDocument();
    });

    it("should have AI/ML category", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tab", { name: /ai/i })).toBeInTheDocument();
    });
  });

  describe("Category Selection", () => {
    it("should have Frontend selected by default", () => {
      render(<SkillsSection />);
      const frontendTab = screen.getByRole("tab", { name: /frontend/i });
      expect(frontendTab).toHaveAttribute("aria-selected", "true");
    });

    it("should switch category when clicking another tab", () => {
      render(<SkillsSection />);
      const backendTab = screen.getByRole("tab", { name: /backend/i });
      fireEvent.click(backendTab);
      expect(backendTab).toHaveAttribute("aria-selected", "true");
    });

    it("should deselect previous tab when selecting new one", () => {
      render(<SkillsSection />);
      const frontendTab = screen.getByRole("tab", { name: /frontend/i });
      const backendTab = screen.getByRole("tab", { name: /backend/i });

      fireEvent.click(backendTab);
      expect(frontendTab).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("Tech Badges", () => {
    it("should display tech badges for selected category", () => {
      render(<SkillsSection />);
      // Frontend should show React, Next.js, TypeScript, etc.
      const badges = screen.getAllByTestId("skill-badge");
      expect(badges.length).toBeGreaterThan(0);
    });

    it("should show React badge in Frontend category", () => {
      render(<SkillsSection />);
      expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("should show Next.js badge in Frontend category", () => {
      render(<SkillsSection />);
      expect(screen.getByText("Next.js")).toBeInTheDocument();
    });

    it("should show TypeScript badge in Frontend category", () => {
      render(<SkillsSection />);
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });

    it("should update badges when switching categories", () => {
      render(<SkillsSection />);
      const backendTab = screen.getByRole("tab", { name: /backend/i });
      fireEvent.click(backendTab);

      // Backend should show Node.js, Express, etc.
      expect(screen.getByText("Node.js")).toBeInTheDocument();
    });

    it("should show Flutter badge in Mobile category", () => {
      render(<SkillsSection />);
      const mobileTab = screen.getByRole("tab", { name: /mobile/i });
      fireEvent.click(mobileTab);

      expect(screen.getByText("Flutter")).toBeInTheDocument();
    });
  });

  describe("Badge Proficiency Levels", () => {
    it("should display proficiency indicator on badges", () => {
      render(<SkillsSection />);
      const badges = screen.getAllByTestId("skill-badge");
      // At least some badges should have proficiency data attribute
      const badgesWithProficiency = badges.filter((badge) =>
        badge.hasAttribute("data-proficiency"),
      );
      expect(badgesWithProficiency.length).toBeGreaterThan(0);
    });
  });

  describe("Layout", () => {
    it("should have tablist for categories", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });

    it("should have tabpanel for skill badges", () => {
      render(<SkillsSection />);
      expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have accessible tab controls", () => {
      render(<SkillsSection />);
      const tablist = screen.getByRole("tablist");
      expect(tablist).toHaveAttribute("aria-label");
    });

    it("should have aria-selected on all tabs", () => {
      render(<SkillsSection />);
      const tabs = screen.getAllByRole("tab");
      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute("aria-selected");
      });
    });

    it("should have proper aria-controls on tabs", () => {
      render(<SkillsSection />);
      const tabs = screen.getAllByRole("tab");
      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute("aria-controls");
      });
    });
  });
});
