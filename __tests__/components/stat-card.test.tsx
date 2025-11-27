/**
 * @fileoverview Tests for StatCard component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from '@testing-library/react';
import { StatCard } from '@/components/stat-card';
import { Code } from 'lucide-react';

describe('StatCard', () => {
  describe('Rendering', () => {
    it('should render the stat value', () => {
      render(<StatCard value={42} label="Projects" />);
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('should render the label', () => {
      render(<StatCard value={42} label="Projects" />);
      expect(screen.getByText('Projects')).toBeInTheDocument();
    });

    it('should render with icon when provided', () => {
      render(<StatCard value={42} label="Projects" icon={Code} />);
      const card = screen.getByTestId('stat-card');
      expect(card.querySelector('svg')).toBeInTheDocument();
    });

    it('should render without icon when not provided', () => {
      render(<StatCard value={42} label="Projects" />);
      expect(screen.getByText('42')).toBeInTheDocument();
    });
  });

  describe('Value Formatting', () => {
    it('should display large numbers correctly', () => {
      render(<StatCard value={1000} label="Lines of Code" />);
      expect(screen.getByText('1000')).toBeInTheDocument();
    });

    it('should handle zero value', () => {
      render(<StatCard value={0} label="Bugs" />);
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('should format with suffix when provided', () => {
      render(<StatCard value={50} label="Projects" suffix="+" />);
      expect(screen.getByText(/50/)).toBeInTheDocument();
      expect(screen.getByText(/\+/)).toBeInTheDocument();
    });

    it('should format with prefix when provided', () => {
      render(<StatCard value={99} label="Uptime" prefix="%" />);
      expect(screen.getByText(/99/)).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should render with default background', () => {
      render(<StatCard value={42} label="Projects" />);
      const card = screen.getByTestId('stat-card');
      expect(card).toBeInTheDocument();
    });

    it('should apply gradient background when gradient props provided', () => {
      render(
        <StatCard
          value={42}
          label="Projects"
          gradientFrom="from-blue-500"
          gradientTo="to-purple-500"
        />
      );
      const card = screen.getByTestId('stat-card');
      expect(card).toHaveClass('bg-gradient-to-br');
    });
  });

  describe('Accessibility', () => {
    it('should have accessible stat structure', () => {
      render(<StatCard value={42} label="Projects" />);
      expect(screen.getByTestId('stat-card')).toBeInTheDocument();
    });

    it('should have readable value and label', () => {
      render(<StatCard value={42} label="Total Projects" />);
      expect(screen.getByText('42')).toBeInTheDocument();
      expect(screen.getByText('Total Projects')).toBeInTheDocument();
    });
  });
});
