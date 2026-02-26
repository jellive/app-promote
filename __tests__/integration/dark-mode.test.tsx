/**
 * @fileoverview Integration tests for dark mode across all components
 * TDD: Tests for dark mode styling and theme toggle functionality
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { StatCard } from "@/components/stat-card";
import { ProjectType, ProjectStatus, ProjectCategory } from "@/data/projects";
import { Code } from "lucide-react";

// Mock next-themes
const mockSetTheme = jest.fn();
let mockTheme = "light";

jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
    resolvedTheme: mockTheme,
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

const mockProject = {
  id: "test-project",
  name: "Test Project",
  emoji: "🚀",
  type: ProjectType.FULL_STACK_MOBILE,
  status: ProjectStatus.PRODUCTION,
  category: ProjectCategory.PERSONAL,
  period: "2024.01 - 2024.06",
  role: "Developer",
  shortDescription: "A test project",
  description: "Full description",
  features: [{ title: "Feature 1", description: "Description 1" }],
  techStack: {
    frontend: ["React", "TypeScript"],
    backend: ["Node.js"],
    infrastructure: ["Docker"],
    desktop: [],
  },
  links: { github: "https://github.com/test" },
};

describe("Dark Mode Integration", () => {
  beforeEach(() => {
    mockTheme = "light";
    mockSetTheme.mockClear();
  });

  describe("ThemeToggle Component", () => {
    it("should toggle theme from light to dark", () => {
      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: /switch to dark mode/i,
      });
      fireEvent.click(button);

      expect(mockSetTheme).toHaveBeenCalledWith("dark");
    });

    it("should toggle theme from dark to light", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: /switch to light mode/i,
      });
      fireEvent.click(button);

      expect(mockSetTheme).toHaveBeenCalledWith("light");
    });
  });

  describe("Header with Dark Mode", () => {
    it("should render Header with theme toggle", () => {
      render(
        <ThemeProvider>
          <Header />
        </ThemeProvider>,
      );

      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /switch to dark mode/i }),
      ).toBeInTheDocument();
    });

    it("should have dark mode compatible classes", () => {
      render(
        <ThemeProvider>
          <Header />
        </ThemeProvider>,
      );

      const header = screen.getByRole("banner");
      // Header uses bg-background which is theme-aware
      expect(header).toHaveClass("bg-background");
    });
  });

  describe("Footer with Dark Mode", () => {
    it("should render Footer with dark mode support", () => {
      render(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>,
      );

      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeInTheDocument();
      // Footer uses border-foreground which is theme-aware
      expect(footer).toHaveClass("border-foreground");
    });

    it("should have accessible links in dark mode", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>,
      );

      const githubLink = screen.getByRole("link", { name: /github/i });
      expect(githubLink).toBeInTheDocument();
    });
  });

  describe("ProjectCard with Dark Mode", () => {
    it("should render ProjectCard with dark mode classes", () => {
      render(
        <ThemeProvider>
          <ProjectCard project={mockProject} />
        </ThemeProvider>,
      );

      const article = screen.getByRole("article");
      const cardDiv = article.querySelector("div");
      // ProjectCard uses bg-card which is theme-aware
      expect(cardDiv).toHaveClass("bg-card");
    });

    it("should display project info correctly in dark mode", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <ProjectCard project={mockProject} />
        </ThemeProvider>,
      );

      expect(screen.getByText("Test Project")).toBeInTheDocument();
      expect(screen.getByText("🚀")).toBeInTheDocument();
    });
  });

  describe("StatCard with Dark Mode", () => {
    it("should render StatCard with theme-aware colors", () => {
      render(
        <ThemeProvider>
          <StatCard value={42} label="Projects" />
        </ThemeProvider>,
      );

      const card = screen.getByTestId("stat-card");
      // StatCard uses bg-card which is theme-aware
      expect(card).toHaveClass("bg-card");
    });

    it("should render StatCard with gradient in dark mode", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <StatCard
            value={100}
            label="Completed"
            gradientFrom="from-blue-500"
            gradientTo="to-purple-500"
          />
        </ThemeProvider>,
      );

      const card = screen.getByTestId("stat-card");
      expect(card).toHaveClass("bg-gradient-to-br");
    });

    it("should render StatCard with icon in dark mode", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <StatCard value={50} label="Code" icon={Code} />
        </ThemeProvider>,
      );

      const card = screen.getByTestId("stat-card");
      expect(card.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Theme Persistence", () => {
    it("should respect initial theme setting", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: /switch to light mode/i,
      });
      fireEvent.click(button);

      // From dark, clicking should set to light
      expect(mockSetTheme).toHaveBeenCalledWith("light");
    });
  });

  describe("All Components Together", () => {
    it("should render full page layout with dark mode support", () => {
      render(
        <ThemeProvider>
          <Header />
          <main>
            <StatCard value={10} label="Projects" />
            <ProjectCard project={mockProject} />
          </main>
          <Footer />
        </ThemeProvider>,
      );

      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
      expect(screen.getByTestId("stat-card")).toBeInTheDocument();
      expect(screen.getByRole("article")).toBeInTheDocument();
    });

    it("should have consistent theme across all components", () => {
      mockTheme = "dark";
      render(
        <ThemeProvider>
          <Header />
          <main>
            <StatCard value={10} label="Projects" />
            <ProjectCard project={mockProject} />
          </main>
          <Footer />
        </ThemeProvider>,
      );

      // All components should be visible and functional (use getAllByText for duplicates)
      // Header and Footer use "JELL" (uppercase)
      const jellTexts = screen.getAllByText("JELL");
      expect(jellTexts.length).toBeGreaterThan(0);
      expect(screen.getByText("10")).toBeInTheDocument();
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });
  });
});
