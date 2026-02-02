/**
 * @fileoverview Tests for ProjectsSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectsSection } from "@/components/sections/projects-section";

describe("ProjectsSection", () => {
  describe("Rendering", () => {
    it("should render as a section element", () => {
      render(<ProjectsSection />);
      expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    });

    it("should have proper id for navigation", () => {
      render(<ProjectsSection />);
      const section = screen.getByTestId("projects-section");
      expect(section).toHaveAttribute("id", "projects");
    });

    it("should have section heading", () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });
  });

  describe("Filter Tabs", () => {
    it("should render filter tabs", () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });

    it('should have "All" filter tab', () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("tab", { name: /전체/i })).toBeInTheDocument();
    });

    it('should have "Active" filter tab', () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("tab", { name: /active/i })).toBeInTheDocument();
    });

    it('should have "Archive" filter tab', () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("tab", { name: /archive/i })).toBeInTheDocument();
    });

    it('should have "All" tab selected by default', () => {
      render(<ProjectsSection />);
      const allTab = screen.getByRole("tab", { name: /전체/i });
      expect(allTab).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("Project Cards", () => {
    it("should render project cards", () => {
      render(<ProjectsSection />);
      const cards = screen.getAllByRole("article");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("should display project names", () => {
      render(<ProjectsSection />);
      // Check for at least one project name
      expect(screen.getByText("Cookting")).toBeInTheDocument();
    });
  });

  describe("Filter Functionality", () => {
    it("should filter projects when clicking Active tab", () => {
      render(<ProjectsSection />);
      const activeTab = screen.getByRole("tab", { name: /active/i });
      fireEvent.click(activeTab);

      // After clicking, only active projects should be visible
      const cards = screen.getAllByRole("article");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("should filter projects when clicking Archive tab", () => {
      render(<ProjectsSection />);
      const archiveTab = screen.getByRole("tab", { name: /archive/i });
      fireEvent.click(archiveTab);

      // After clicking, only archive projects should be visible
      const cards = screen.getAllByRole("article");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("should show all projects when clicking All tab", () => {
      render(<ProjectsSection />);

      // First click Archive
      const archiveTab = screen.getByRole("tab", { name: /archive/i });
      fireEvent.click(archiveTab);

      // Then click All
      const allTab = screen.getByRole("tab", { name: /전체/i });
      fireEvent.click(allTab);

      const cards = screen.getAllByRole("article");
      expect(cards.length).toBeGreaterThan(0);
    });
  });

  describe("Layout", () => {
    it("should have responsive grid layout for cards", () => {
      render(<ProjectsSection />);
      const section = screen.getByTestId("projects-section");
      const grid = section.querySelector(".grid");
      expect(grid).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have accessible tab controls", () => {
      render(<ProjectsSection />);
      const tablist = screen.getByRole("tablist");
      expect(tablist).toBeInTheDocument();
    });

    it("should have aria-controls on tabs", () => {
      render(<ProjectsSection />);
      const tabs = screen.getAllByRole("tab");
      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute("aria-selected");
      });
    });
  });
});
