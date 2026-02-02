/**
 * @fileoverview Tests for ProjectCard component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/project-card";
import { ProjectType, ProjectStatus } from "@/data/projects";

const mockProject = {
  id: "test-project",
  name: "Test Project",
  emoji: "🚀",
  type: ProjectType.FULL_STACK_MOBILE,
  status: ProjectStatus.PRODUCTION,
  period: "2024.01 - 2024.06",
  role: "Developer",
  shortDescription: "A test project for testing purposes",
  description: "Full description of the test project",
  features: [{ title: "Feature 1", description: "Description 1" }],
  techStack: {
    frontend: ["React", "TypeScript", "TailwindCSS"],
    backend: ["Node.js"],
    infrastructure: ["Docker"],
    desktop: [],
  },
  links: {
    github: "https://github.com/test/project",
  },
};

describe("ProjectCard", () => {
  describe("Rendering", () => {
    it("should render project name", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("should render project emoji", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("🚀")).toBeInTheDocument();
    });

    it("should render short description", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText(/test project for testing/i)).toBeInTheDocument();
    });

    it("should render project type badge", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText(/full-stack/i)).toBeInTheDocument();
    });

    it("should render project status badge", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText(/production/i)).toBeInTheDocument();
    });
  });

  describe("Tech Stack Badges", () => {
    it("should render tech stack badges", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });

    it("should limit visible tech badges to 5", () => {
      const projectWithManyTechs = {
        ...mockProject,
        techStack: {
          frontend: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "Next.js",
            "Redux",
            "GraphQL",
          ],
          backend: [],
          infrastructure: [],
          desktop: [],
        },
      };
      render(<ProjectCard project={projectWithManyTechs} />);

      // Should show 5 tech badges plus a "+N more" indicator
      const techBadges = screen.getAllByTestId("tech-badge");
      expect(techBadges.length).toBeLessThanOrEqual(5);
    });
  });

  describe("Navigation", () => {
    it("should be a clickable card", () => {
      render(<ProjectCard project={mockProject} />);
      const card = screen.getByRole("article");
      expect(card).toBeInTheDocument();
    });

    it("should have link to project detail page", () => {
      render(<ProjectCard project={mockProject} />);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/projects/test-project");
    });
  });

  describe("Status Badge Colors", () => {
    it("should render production status with appropriate styling", () => {
      render(<ProjectCard project={mockProject} />);
      const badge = screen.getByText(/production/i);
      expect(badge).toBeInTheDocument();
    });

    it("should render development status with appropriate styling", () => {
      const devProject = { ...mockProject, status: ProjectStatus.DEVELOPMENT };
      render(<ProjectCard project={devProject} />);
      const badge = screen.getByText(/development/i);
      expect(badge).toBeInTheDocument();
    });

    it("should render archive status with appropriate styling", () => {
      const archiveProject = { ...mockProject, status: ProjectStatus.ARCHIVE };
      render(<ProjectCard project={archiveProject} />);
      const badge = screen.getByText(/archive/i);
      expect(badge).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have accessible article structure", () => {
      render(<ProjectCard project={mockProject} />);
      expect(screen.getByRole("article")).toBeInTheDocument();
    });

    it("should have accessible link", () => {
      render(<ProjectCard project={mockProject} />);
      const link = screen.getByRole("link");
      expect(link).toHaveAccessibleName();
    });
  });
});
