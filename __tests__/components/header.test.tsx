/**
 * @fileoverview Tests for Header component
 * TDD: RED phase - Write tests first
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/providers/theme-provider";

// Wrapper for rendering with providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Header", () => {
  describe("Rendering", () => {
    it("should render the header element", () => {
      renderWithProviders(<Header />);
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("should render the logo/brand", () => {
      renderWithProviders(<Header />);
      expect(screen.getByText(/Jell/i)).toBeInTheDocument();
    });

    it("should render navigation links", () => {
      renderWithProviders(<Header />);
      const navElements = screen.getAllByRole("navigation");
      expect(navElements.length).toBeGreaterThanOrEqual(1);
    });

    it("should have Projects link", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /projects/i });
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it("should have Skills link", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /skills/i });
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it("should have About link", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /about/i });
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it("should have Contact link", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /contact/i });
      expect(links.length).toBeGreaterThanOrEqual(1);
    });

    it("should render theme toggle button", () => {
      renderWithProviders(<Header />);
      const themeButtons = screen.getAllByRole("button");
      const themeToggle = themeButtons.find(
        (btn) =>
          btn.getAttribute("aria-label")?.toLowerCase().includes("theme") ||
          btn.getAttribute("aria-label")?.toLowerCase().includes("mode"),
      );
      expect(themeToggle).toBeInTheDocument();
    });
  });

  describe("Navigation Links", () => {
    it("should have correct href for Projects", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /projects/i });
      expect(links[0]).toHaveAttribute("href", "#projects");
    });

    it("should have correct href for Skills", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /skills/i });
      expect(links[0]).toHaveAttribute("href", "#skills");
    });

    it("should have correct href for About", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /about/i });
      expect(links[0]).toHaveAttribute("href", "#about");
    });

    it("should have correct href for Contact", () => {
      renderWithProviders(<Header />);
      const links = screen.getAllByRole("link", { name: /contact/i });
      expect(links[0]).toHaveAttribute("href", "#contact");
    });
  });

  describe("Mobile Menu", () => {
    it("should render mobile menu button", () => {
      renderWithProviders(<Header />);
      expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
    });

    it("should toggle mobile menu on button click", () => {
      renderWithProviders(<Header />);
      const menuButton = screen.getByRole("button", { name: /menu/i });
      const mobileMenu = screen.getByTestId("mobile-menu");

      // Initially menu should be invisible
      expect(mobileMenu).toHaveClass("invisible");

      // Click to open
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveClass("visible");

      // Click to close
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveClass("invisible");
    });

    it("should have aria-expanded attribute on menu button", () => {
      renderWithProviders(<Header />);
      const menuButton = screen.getByRole("button", { name: /menu/i });
      expect(menuButton).toHaveAttribute("aria-expanded", "false");

      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Accessibility", () => {
    it("should have proper navigation landmarks with aria-labels", () => {
      renderWithProviders(<Header />);
      const navElements = screen.getAllByRole("navigation");
      navElements.forEach((nav) => {
        expect(nav).toHaveAttribute("aria-label");
      });
    });

    it("should have accessible logo link", () => {
      renderWithProviders(<Header />);
      const logoLink = screen.getByLabelText(/home/i);
      expect(logoLink).toHaveAttribute("href", "/");
    });
  });
});
