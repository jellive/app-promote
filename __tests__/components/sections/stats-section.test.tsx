/**
 * @fileoverview Tests for StatsSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from '@testing-library/react';
import { StatsSection } from '@/components/sections/stats-section';

describe('StatsSection', () => {
  describe('Rendering', () => {
    it('should render as a section element', () => {
      render(<StatsSection />);
      expect(screen.getByTestId('stats-section')).toBeInTheDocument();
    });

    it('should have proper id for navigation', () => {
      render(<StatsSection />);
      const section = screen.getByTestId('stats-section');
      expect(section).toHaveAttribute('id', 'stats');
    });
  });

  describe('Stats Cards', () => {
    it('should render 4 stat cards', () => {
      render(<StatsSection />);
      const statCards = screen.getAllByTestId('stat-card');
      expect(statCards).toHaveLength(4);
    });

    it('should display projects count (15)', () => {
      render(<StatsSection />);
      expect(screen.getByText('15')).toBeInTheDocument();
    });

    it('should display lines of code (50000+)', () => {
      render(<StatsSection />);
      // The value and suffix may be in the same element
      expect(screen.getByText(/50000/)).toBeInTheDocument();
    });

    it('should display tests count', () => {
      render(<StatsSection />);
      expect(screen.getByText('1649')).toBeInTheDocument();
    });

    it('should display test coverage percentage', () => {
      render(<StatsSection />);
      expect(screen.getByText(/%/)).toBeInTheDocument();
    });
  });

  describe('Labels', () => {
    it('should have label for projects', () => {
      render(<StatsSection />);
      expect(screen.getByText(/프로젝트/i)).toBeInTheDocument();
    });

    it('should have label for lines of code', () => {
      render(<StatsSection />);
      expect(screen.getByText(/코드/i)).toBeInTheDocument();
    });

    it('should have label for tests', () => {
      render(<StatsSection />);
      // Use getAllByText since "테스트" appears in multiple places
      const elements = screen.getAllByText(/테스트/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it('should have label for coverage', () => {
      render(<StatsSection />);
      expect(screen.getByText(/커버리지/i)).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('should render icons for each stat card', () => {
      render(<StatsSection />);
      const statCards = screen.getAllByTestId('stat-card');
      statCards.forEach((card) => {
        expect(card.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('Layout', () => {
    it('should have responsive grid layout', () => {
      render(<StatsSection />);
      const section = screen.getByTestId('stats-section');
      const grid = section.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have section heading', () => {
      render(<StatsSection />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });
  });
});
