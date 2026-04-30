/**
 * @fileoverview Tests for Project Detail Page
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import ProjectDetailPage from "@/app/projects/[id]/page";
import { projectsData, getProjectById } from "@/data/projects";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("Project Detail Page", () => {
  // Note: generateStaticParams and generateMetadata are Server Component functions
  // that cannot be exported from a "use client" component.
  // Testing the data source directly instead.
  describe("Static Params Data", () => {
    it("should have 23 projects available", () => {
      expect(projectsData).toHaveLength(23);
    });

    it("should have correct project IDs", () => {
      const ids = projectsData.map((p) => p.id);
      expect(ids).toContain("cookting");
      expect(ids).toContain("dev-utils-hub");
    });

    it("should include cookting project", () => {
      const cookting = getProjectById("cookting");
      expect(cookting).toBeDefined();
    });

    it("should include dev-utils-hub project", () => {
      const devUtilsHub = getProjectById("dev-utils-hub");
      expect(devUtilsHub).toBeDefined();
    });
  });

  describe("Metadata Data", () => {
    it("should have title for cookting", () => {
      const project = getProjectById("cookting");
      expect(project?.name).toContain("Cookting");
    });

    it("should have description for projects", () => {
      const project = getProjectById("cookting");
      expect(project?.shortDescription).toBeTruthy();
    });

    it("should have all required metadata fields", () => {
      const project = getProjectById("cookting");
      expect(project?.name).toBeTruthy();
      expect(project?.shortDescription).toBeTruthy();
      expect(project?.description).toBeTruthy();
    });
  });

  describe("Page Rendering - Cookting", () => {
    const params = { id: "cookting" };

    it("should render project name", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText("Cookting")).toBeInTheDocument();
    });

    it("should render project emoji", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText("🍳")).toBeInTheDocument();
    });

    it("should render project description", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      const project = getProjectById("cookting")!;
      expect(screen.getByText(project.shortDescription)).toBeInTheDocument();
    });

    it("should render project period", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/2024\.08/)).toBeInTheDocument();
    });

    it("should render project role", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/1인 풀스택 개발/)).toBeInTheDocument();
    });
  });

  describe("Tech Stack Section", () => {
    const params = { id: "cookting" };

    it("should render tech stack section", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId("tech-stack-section")).toBeInTheDocument();
    });

    it("should display frontend technologies", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText("Flutter")).toBeInTheDocument();
    });

    it("should display backend technologies", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText("NestJS")).toBeInTheDocument();
    });
  });

  describe("Features Section", () => {
    const params = { id: "cookting" };

    it("should render features section", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId("features-section")).toBeInTheDocument();
    });

    it("should display feature titles", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText("AI 재료 인식")).toBeInTheDocument();
    });

    it("should display feature descriptions", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/카메라로 냉장고를 촬영/)).toBeInTheDocument();
    });
  });

  describe("Achievements Section", () => {
    const params = { id: "cookting" };

    it("should render achievements section when available", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId("achievements-section")).toBeInTheDocument();
    });

    it("should display achievement titles", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(
        screen.getByText("App Store + Google Play 출시"),
      ).toBeInTheDocument();
    });
  });

  describe("Project Links Section", () => {
    const params = { id: "cookting" };

    it("should render links section", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId("project-links-section")).toBeInTheDocument();
    });

    it("should display GitHub link for public repos", async () => {
      const Page = await ProjectDetailPage({
        params: { id: "dev-utils-hub" },
      });
      render(Page);
      const githubLink = screen.getByRole("link", { name: /github/i });
      expect(githubLink).toHaveAttribute(
        "href",
        expect.stringContaining("github.com"),
      );
    });

    it("should hide GitHub link and show 'Private repo' badge for private repos", async () => {
      const Page = await ProjectDetailPage({ params: { id: "cookting" } });
      render(Page);
      expect(screen.getByTestId("private-repo-badge")).toBeInTheDocument();
      expect(screen.getByText(/private repo/i)).toBeInTheDocument();
      expect(
        screen.queryByRole("link", { name: /github/i }),
      ).not.toBeInTheDocument();
    });

    it("should not show 'Private repo' badge for public repos", async () => {
      const Page = await ProjectDetailPage({
        params: { id: "dev-utils-hub" },
      });
      render(Page);
      expect(
        screen.queryByTestId("private-repo-badge"),
      ).not.toBeInTheDocument();
    });
  });

  describe("Code Stats Section", () => {
    const params = { id: "cookting" };

    it("should render code stats when available", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId("code-stats-section")).toBeInTheDocument();
    });

    it("should display total lines of code", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/18,?000/)).toBeInTheDocument();
    });
  });

  describe("Different Project Types", () => {
    it("should render desktop project (dev-utils-hub)", async () => {
      const Page = await ProjectDetailPage({ params: { id: "dev-utils-hub" } });
      render(Page);
      expect(screen.getByText("Dev Utils Hub")).toBeInTheDocument();
      expect(screen.getByText("🛠️")).toBeInTheDocument();
    });

    it("should render iOS project (jellmodoro)", async () => {
      const Page = await ProjectDetailPage({ params: { id: "jellmodoro" } });
      render(Page);
      expect(screen.getByText("Jellmodoro")).toBeInTheDocument();
      expect(screen.getByText("🍅")).toBeInTheDocument();
    });

    it("should render npm package project (jell-utils)", async () => {
      const Page = await ProjectDetailPage({ params: { id: "jell-utils" } });
      render(Page);
      expect(screen.getByText("jell-utils.js")).toBeInTheDocument();
      expect(screen.getByText("📦")).toBeInTheDocument();
    });
  });

  describe("Back Navigation", () => {
    const params = { id: "cookting" };

    it("should have back to projects link", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      const backLink = screen.getByRole("link", { name: /프로젝트 목록/i });
      expect(backLink).toHaveAttribute("href", "/#projects");
    });
  });

  describe("Accessibility", () => {
    const params = { id: "cookting" };

    it("should have proper heading hierarchy", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("should have main element", async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByRole("main")).toBeInTheDocument();
    });
  });
});
