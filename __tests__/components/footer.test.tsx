/**
 * @fileoverview Tests for Footer component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  describe("Rendering", () => {
    it("should render the footer element", () => {
      render(<Footer />);
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("should render copyright notice", () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(
        screen.getByText(new RegExp(currentYear.toString())),
      ).toBeInTheDocument();
    });

    it("should render privacy policy link", () => {
      render(<Footer />);
      expect(
        screen.getByRole("link", { name: /privacy/i }),
      ).toBeInTheDocument();
    });
  });

  describe("External Links", () => {
    it("should have GitHub link", () => {
      render(<Footer />);
      expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    });

    it("should have LinkedIn link", () => {
      render(<Footer />);
      expect(
        screen.getByRole("link", { name: /linkedin/i }),
      ).toBeInTheDocument();
    });

    it("should have Email link", () => {
      render(<Footer />);
      expect(
        screen.getByRole("link", { name: /email|mail/i }),
      ).toBeInTheDocument();
    });

    it("should have external links open in new tab", () => {
      render(<Footer />);
      const githubLink = screen.getByRole("link", { name: /github/i });
      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(githubLink).toHaveAttribute(
        "rel",
        expect.stringContaining("noopener"),
      );
    });
  });

  describe("Footer Sections", () => {
    it("should have navigation section", () => {
      render(<Footer />);
      expect(screen.getByText(/projects/i)).toBeInTheDocument();
    });

    it("should have contact section", () => {
      render(<Footer />);
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have proper footer landmark", () => {
      render(<Footer />);
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("should have accessible link names", () => {
      render(<Footer />);
      const links = screen.getAllByRole("link");
      links.forEach((link) => {
        expect(link).toHaveAccessibleName();
      });
    });
  });
});
