/**
 * @fileoverview Tests for AboutSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from '@testing-library/react';
import { AboutSection } from '@/components/sections/about-section';

describe('AboutSection', () => {
  describe('Rendering', () => {
    it('should render as a section element', () => {
      render(<AboutSection />);
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
    });

    it('should have proper id for navigation', () => {
      render(<AboutSection />);
      const section = screen.getByTestId('about-section');
      expect(section).toHaveAttribute('id', 'about');
    });

    it('should have section heading', () => {
      render(<AboutSection />);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('should display section title', () => {
      render(<AboutSection />);
      expect(screen.getByText(/소개/i)).toBeInTheDocument();
    });
  });

  describe('Profile Content', () => {
    it('should display developer name', () => {
      render(<AboutSection />);
      expect(screen.getByText(/Jell/i)).toBeInTheDocument();
    });

    it('should display developer introduction', () => {
      render(<AboutSection />);
      const elements = screen.getAllByText(/풀스택/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it('should have bio text', () => {
      render(<AboutSection />);
      const bioElement = screen.getByTestId('about-bio');
      expect(bioElement).toBeInTheDocument();
      expect(bioElement.textContent?.length).toBeGreaterThan(50);
    });
  });

  describe('Timeline', () => {
    it('should render timeline container', () => {
      render(<AboutSection />);
      expect(screen.getByTestId('timeline')).toBeInTheDocument();
    });

    it('should have at least 3 timeline items', () => {
      render(<AboutSection />);
      const timelineItems = screen.getAllByTestId('timeline-item');
      expect(timelineItems.length).toBeGreaterThanOrEqual(3);
    });

    it('should display year for each timeline item', () => {
      render(<AboutSection />);
      const years = screen.getAllByTestId('timeline-year');
      expect(years.length).toBeGreaterThanOrEqual(3);
    });

    it('should display title for each timeline item', () => {
      render(<AboutSection />);
      const titles = screen.getAllByTestId('timeline-title');
      expect(titles.length).toBeGreaterThanOrEqual(3);
    });

    it('should display description for each timeline item', () => {
      render(<AboutSection />);
      const descriptions = screen.getAllByTestId('timeline-description');
      expect(descriptions.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Achievements', () => {
    it('should render achievements section', () => {
      render(<AboutSection />);
      expect(screen.getByTestId('achievements')).toBeInTheDocument();
    });

    it('should have at least 2 achievement items', () => {
      render(<AboutSection />);
      const achievements = screen.getAllByTestId('achievement-item');
      expect(achievements.length).toBeGreaterThanOrEqual(2);
    });

    it('should display achievement icons', () => {
      render(<AboutSection />);
      const achievements = screen.getAllByTestId('achievement-item');
      achievements.forEach(achievement => {
        expect(achievement.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('Values/Philosophy', () => {
    it('should display development values or philosophy', () => {
      render(<AboutSection />);
      expect(screen.getByTestId('values-section')).toBeInTheDocument();
    });

    it('should have at least 3 value items', () => {
      render(<AboutSection />);
      const values = screen.getAllByTestId('value-item');
      expect(values.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Layout', () => {
    it('should have two-column layout on desktop', () => {
      render(<AboutSection />);
      const section = screen.getByTestId('about-section');
      const gridContainer = section.querySelector('.grid');
      expect(gridContainer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<AboutSection />);
      const h2 = screen.getByRole('heading', { level: 2 });
      expect(h2).toBeInTheDocument();
    });

    it('should have accessible timeline structure', () => {
      render(<AboutSection />);
      const timeline = screen.getByTestId('timeline');
      expect(timeline).toHaveAttribute('role', 'list');
    });

    it('should have accessible timeline items', () => {
      render(<AboutSection />);
      const timelineItems = screen.getAllByTestId('timeline-item');
      timelineItems.forEach(item => {
        expect(item).toHaveAttribute('role', 'listitem');
      });
    });
  });
});
