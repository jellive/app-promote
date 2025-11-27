/**
 * @fileoverview Tests for Skeleton Components
 * TDD: Validate loading state components for performance
 */

import { render, screen } from '@testing-library/react';
import { ProjectCardSkeleton, ProjectCardSkeletonGrid } from '@/components/skeletons/project-card-skeleton';
import { ProjectDetailSkeleton } from '@/components/skeletons/project-detail-skeleton';

describe('ProjectCardSkeleton', () => {
  it('should render skeleton with test id', () => {
    render(<ProjectCardSkeleton />);
    expect(screen.getByTestId('project-card-skeleton')).toBeInTheDocument();
  });

  it('should have animate-pulse class for loading animation', () => {
    render(<ProjectCardSkeleton />);
    const skeleton = screen.getByTestId('project-card-skeleton');
    expect(skeleton).toHaveClass('animate-pulse');
  });

  it('should accept custom className', () => {
    render(<ProjectCardSkeleton className="custom-class" />);
    const skeleton = screen.getByTestId('project-card-skeleton');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('should have proper structure for preventing CLS', () => {
    render(<ProjectCardSkeleton />);
    const skeleton = screen.getByTestId('project-card-skeleton');
    // Should have card-like structure
    expect(skeleton).toHaveClass('rounded-xl');
    expect(skeleton).toHaveClass('border');
  });
});

describe('ProjectCardSkeletonGrid', () => {
  it('should render grid with test id', () => {
    render(<ProjectCardSkeletonGrid />);
    expect(screen.getByTestId('project-card-skeleton-grid')).toBeInTheDocument();
  });

  it('should render 8 skeleton cards by default', () => {
    render(<ProjectCardSkeletonGrid />);
    const skeletons = screen.getAllByTestId('project-card-skeleton');
    expect(skeletons).toHaveLength(8);
  });

  it('should render custom count of skeleton cards', () => {
    render(<ProjectCardSkeletonGrid count={4} />);
    const skeletons = screen.getAllByTestId('project-card-skeleton');
    expect(skeletons).toHaveLength(4);
  });

  it('should have responsive grid classes', () => {
    render(<ProjectCardSkeletonGrid />);
    const grid = screen.getByTestId('project-card-skeleton-grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });
});

describe('ProjectDetailSkeleton', () => {
  it('should render skeleton with test id', () => {
    render(<ProjectDetailSkeleton />);
    expect(screen.getByTestId('project-detail-skeleton')).toBeInTheDocument();
  });

  it('should have animate-pulse class for loading animation', () => {
    render(<ProjectDetailSkeleton />);
    const skeleton = screen.getByTestId('project-detail-skeleton');
    expect(skeleton).toHaveClass('animate-pulse');
  });

  it('should render as main element for accessibility', () => {
    render(<ProjectDetailSkeleton />);
    const skeleton = screen.getByTestId('project-detail-skeleton');
    expect(skeleton.tagName).toBe('MAIN');
  });

  it('should have container for proper layout', () => {
    render(<ProjectDetailSkeleton />);
    const skeleton = screen.getByTestId('project-detail-skeleton');
    const container = skeleton.querySelector('.container');
    expect(container).toBeInTheDocument();
  });
});

describe('Skeleton Accessibility', () => {
  it('should not have interactive elements in ProjectCardSkeleton', () => {
    render(<ProjectCardSkeleton />);
    const skeleton = screen.getByTestId('project-card-skeleton');
    const buttons = skeleton.querySelectorAll('button');
    const links = skeleton.querySelectorAll('a');
    expect(buttons).toHaveLength(0);
    expect(links).toHaveLength(0);
  });

  it('should not have interactive elements in ProjectDetailSkeleton', () => {
    render(<ProjectDetailSkeleton />);
    const skeleton = screen.getByTestId('project-detail-skeleton');
    const buttons = skeleton.querySelectorAll('button');
    const links = skeleton.querySelectorAll('a');
    expect(buttons).toHaveLength(0);
    expect(links).toHaveLength(0);
  });
});
