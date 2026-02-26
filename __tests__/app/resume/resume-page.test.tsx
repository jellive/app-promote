/**
 * @fileoverview Tests for Resume Page
 * TDD: RED phase - Write tests first
 */

import { render, screen } from "@testing-library/react";
import ResumePage from "@/app/resume/page";

describe("Resume Page", () => {
  describe("Page Rendering", () => {
    it("should render the resume page without crashing", () => {
      render(<ResumePage />);
      expect(document.body).toBeTruthy();
    });

    it("should render name 유한군", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/유한군/);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should render name Jell", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/Jell/);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe("Resume Download Link", () => {
    it("should have resume download link", () => {
      render(<ResumePage />);
      const downloadLink = document.querySelector(
        'a[href="/이력서_유한군.pdf"]',
      );
      expect(downloadLink).toBeInTheDocument();
    });

    it("should have download attribute on resume link", () => {
      render(<ResumePage />);
      const downloadLink = document.querySelector(
        'a[href="/이력서_유한군.pdf"]',
      );
      expect(downloadLink).toHaveAttribute("download");
    });
  });

  describe("Main Sections", () => {
    it("should render experience section", () => {
      render(<ResumePage />);
      expect(screen.getByTestId("experience-section")).toBeInTheDocument();
    });

    it("should render skills section", () => {
      render(<ResumePage />);
      expect(screen.getByTestId("skills-section")).toBeInTheDocument();
    });

    it("should render projects section", () => {
      render(<ResumePage />);
      expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    });
  });

  describe("Experience Content", () => {
    it("should show AZFlow experience", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/AZFlow|애즈플로우/);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should show 비주얼신 experience", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/비주얼신/);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should show 청담어학원 or 크레버스 experience", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/청담어학원|크레버스/);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should show 케이라운지 experience", () => {
      render(<ResumePage />);
      expect(screen.getByText(/케이라운지/)).toBeInTheDocument();
    });
  });

  describe("Skills Content", () => {
    it("should mention Frontend technologies", () => {
      render(<ResumePage />);
      expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    });

    it("should mention Mobile technologies", () => {
      render(<ResumePage />);
      expect(screen.getByText(/Mobile/i)).toBeInTheDocument();
    });
  });

  describe("Projects Content", () => {
    it("should show AZFlow project", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/AZFlow/);
      expect(elements.length).toBeGreaterThan(0);
    });

    it("should show 빈자리 or Vinjari project", () => {
      render(<ResumePage />);
      expect(screen.getByText(/빈자리|Vinjari/)).toBeInTheDocument();
    });

    it("should show finiroom project", () => {
      render(<ResumePage />);
      const elements = screen.getAllByText(/finiroom/);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe("Navigation", () => {
    it("should have a link back to home", () => {
      render(<ResumePage />);
      const homeLink = document.querySelector('a[href="/"]');
      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("Summary Section", () => {
    it("should render summary section", () => {
      render(<ResumePage />);
      expect(screen.getByTestId("summary-section")).toBeInTheDocument();
    });

    it("should mention 8년 or 8+ years experience", () => {
      render(<ResumePage />);
      expect(screen.getByText(/8년|8\+/)).toBeInTheDocument();
    });
  });

  describe("Contact Information", () => {
    it("should render contact info section", () => {
      render(<ResumePage />);
      expect(screen.getByTestId("contact-section")).toBeInTheDocument();
    });

    it("should show email address", () => {
      render(<ResumePage />);
      expect(screen.getByText(/jellive7@gmail\.com/)).toBeInTheDocument();
    });

    it("should show GitHub link", () => {
      render(<ResumePage />);
      const githubLink = document.querySelector(
        'a[href*="github.com/jellive"]',
      );
      expect(githubLink).toBeInTheDocument();
    });
  });
});
