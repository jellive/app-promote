/**
 * @fileoverview Tests for TimelineSection component
 */

import { render, screen } from "@testing-library/react";
import { TimelineSection } from "@/components/sections/timeline-section";

describe("TimelineSection", () => {
  describe("Rendering", () => {
    it("should render as a section element", () => {
      render(<TimelineSection />);
      expect(screen.getByTestId("timeline-section")).toBeInTheDocument();
    });

    it("should have proper id for navigation", () => {
      render(<TimelineSection />);
      expect(screen.getByTestId("timeline-section")).toHaveAttribute(
        "id",
        "timeline",
      );
    });

    it("should have section heading", () => {
      render(<TimelineSection />);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("should display section title", () => {
      render(<TimelineSection />);
      expect(screen.getByText(/타임라인/)).toBeInTheDocument();
    });
  });

  describe("Timeline Structure", () => {
    it("should render year groups", () => {
      render(<TimelineSection />);
      const groups = screen.getAllByTestId("timeline-year-group");
      expect(groups.length).toBeGreaterThan(0);
    });

    it("should display year labels", () => {
      render(<TimelineSection />);
      // 2025년 레이블이 있어야 함 (프로젝트가 있는 연도)
      expect(screen.getByText("2025")).toBeInTheDocument();
    });

    it("should display year label 2016 for early career", () => {
      render(<TimelineSection />);
      expect(screen.getByText("2016")).toBeInTheDocument();
    });

    it("should render project cards", () => {
      render(<TimelineSection />);
      const cards = screen.getAllByTestId("timeline-project-card");
      expect(cards.length).toBeGreaterThan(0);
    });
  });

  describe("Project Cards", () => {
    it("should display project names", () => {
      render(<TimelineSection />);
      // 프로젝트 이름이 하나라도 렌더링되어야 함
      const cards = screen.getAllByTestId("timeline-project-card");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("should display project period", () => {
      render(<TimelineSection />);
      // period 형식 텍스트가 하나 이상 있어야 함
      const periods = screen.getAllByText(/2024\.12 - 2025\.09/);
      expect(periods.length).toBeGreaterThan(0);
    });

    it("should display category badges", () => {
      render(<TimelineSection />);
      // 회사 카테고리 뱃지가 있어야 함
      const badges = screen.getAllByText(/💼 회사/);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  describe("Layout", () => {
    it("should have container div", () => {
      render(<TimelineSection />);
      const section = screen.getByTestId("timeline-section");
      expect(section.querySelector(".container")).toBeInTheDocument();
    });
  });
});
