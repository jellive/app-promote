/**
 * @fileoverview Tests for BlogSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import { BlogSection } from "@/components/sections/blog-section";

describe("BlogSection", () => {
  describe("Rendering", () => {
    it("should render as a section element with testid", () => {
      render(<BlogSection />);
      expect(screen.getByTestId("blog-section")).toBeInTheDocument();
    });

    it("should have proper id for navigation", () => {
      render(<BlogSection />);
      const section = screen.getByTestId("blog-section");
      expect(section).toHaveAttribute("id", "blog");
    });
  });

  describe("Section Header", () => {
    it("should render section heading", () => {
      render(<BlogSection />);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it('should render "블로그" in heading', () => {
      render(<BlogSection />);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading.textContent).toMatch(/블로그/);
    });

    it("should render a link to blog.jell.kr in header", () => {
      render(<BlogSection />);
      const links = screen.getAllByRole("link");
      const blogLinks = links.filter(
        (link) =>
          link.getAttribute("href") === "https://blog.jell.kr" ||
          link.textContent?.includes("더 보기"),
      );
      expect(blogLinks.length).toBeGreaterThan(0);
    });
  });

  describe("Blog Post Cards", () => {
    it("should render 5 blog post cards", () => {
      render(<BlogSection />);
      const cards = screen.getAllByTestId("blog-post-card");
      expect(cards).toHaveLength(5);
    });

    it("should render blog post titles", () => {
      render(<BlogSection />);
      const titles = screen.getAllByTestId("blog-post-title");
      expect(titles).toHaveLength(5);
    });

    it("should render the Flutter WebView Bridge post title", () => {
      render(<BlogSection />);
      expect(
        screen.getByText(/Flutter WebView Bridge 최적화/),
      ).toBeInTheDocument();
    });

    it("should render the LiDAR post title", () => {
      render(<BlogSection />);
      expect(screen.getByText(/LiDAR로 공간을 스캔하다/)).toBeInTheDocument();
    });

    it("should render the TDD post title", () => {
      render(<BlogSection />);
      expect(screen.getByText(/TDD로 1,156개 테스트/)).toBeInTheDocument();
    });

    it("should render post tags", () => {
      render(<BlogSection />);
      const flutterTags = screen.getAllByText("Flutter");
      expect(flutterTags.length).toBeGreaterThan(0);
    });

    it("should render post dates", () => {
      render(<BlogSection />);
      expect(screen.getByText("2025.01")).toBeInTheDocument();
    });

    it("should render read links pointing to blog.jell.kr", () => {
      render(<BlogSection />);
      const links = screen.getAllByRole("link");
      const blogPostLinks = links.filter(
        (link) => link.getAttribute("href") === "https://blog.jell.kr",
      );
      expect(blogPostLinks.length).toBeGreaterThan(0);
    });
  });

  describe("Footer CTA", () => {
    it('should render "포스트 모두 보기" or similar CTA button', () => {
      render(<BlogSection />);
      expect(screen.getByText(/포스트 모두 보기/)).toBeInTheDocument();
    });

    it("should render CTA link pointing to blog.jell.kr", () => {
      render(<BlogSection />);
      const links = screen.getAllByRole("link");
      const ctaLink = links.find(
        (link) =>
          link.getAttribute("href") === "https://blog.jell.kr" &&
          link.textContent?.includes("포스트 모두 보기"),
      );
      expect(ctaLink).toBeInTheDocument();
    });
  });

  describe("Layout", () => {
    it("should have a grid container for cards", () => {
      render(<BlogSection />);
      const section = screen.getByTestId("blog-section");
      const grid = section.querySelector(".grid");
      expect(grid).toBeInTheDocument();
    });
  });
});
