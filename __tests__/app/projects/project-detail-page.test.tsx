/**
 * @fileoverview Tests for Project Detail Page
 * TDD: RED phase - Write tests first
 */

import { render, screen } from '@testing-library/react';
import ProjectDetailPage, { generateStaticParams, generateMetadata } from '@/app/projects/[id]/page';
import { projectsData, getProjectById } from '@/data/projects';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('Project Detail Page', () => {
  describe('generateStaticParams', () => {
    it('should return params for all 8 projects', async () => {
      const params = await generateStaticParams();
      expect(params).toHaveLength(8);
    });

    it('should return correct project IDs', async () => {
      const params = await generateStaticParams();
      const expectedIds = projectsData.map(p => p.id);
      const actualIds = params.map(p => p.id);
      expect(actualIds).toEqual(expectedIds);
    });

    it('should include cookting project', async () => {
      const params = await generateStaticParams();
      expect(params).toContainEqual({ id: 'cookting' });
    });

    it('should include dev-utils-hub project', async () => {
      const params = await generateStaticParams();
      expect(params).toContainEqual({ id: 'dev-utils-hub' });
    });
  });

  describe('generateMetadata', () => {
    it('should generate correct title for cookting', async () => {
      const metadata = await generateMetadata({ params: { id: 'cookting' } });
      expect(metadata.title).toContain('Cookting');
    });

    it('should generate correct description', async () => {
      const metadata = await generateMetadata({ params: { id: 'cookting' } });
      expect(metadata.description).toBeTruthy();
    });

    it('should include openGraph metadata', async () => {
      const metadata = await generateMetadata({ params: { id: 'cookting' } });
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBeTruthy();
    });
  });

  describe('Page Rendering - Cookting', () => {
    const params = { id: 'cookting' };

    it('should render project name', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('Cookting')).toBeInTheDocument();
    });

    it('should render project emoji', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('🍳')).toBeInTheDocument();
    });

    it('should render project description', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      const project = getProjectById('cookting')!;
      expect(screen.getByText(project.shortDescription)).toBeInTheDocument();
    });

    it('should render project period', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/2024\.03/)).toBeInTheDocument();
    });

    it('should render project role', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/1인 풀스택 개발/)).toBeInTheDocument();
    });
  });

  describe('Tech Stack Section', () => {
    const params = { id: 'cookting' };

    it('should render tech stack section', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument();
    });

    it('should display frontend technologies', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('Flutter')).toBeInTheDocument();
    });

    it('should display backend technologies', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('Supabase')).toBeInTheDocument();
    });
  });

  describe('Features Section', () => {
    const params = { id: 'cookting' };

    it('should render features section', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId('features-section')).toBeInTheDocument();
    });

    it('should display feature titles', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('AI 재료 인식')).toBeInTheDocument();
    });

    it('should display feature descriptions', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/카메라로 냉장고를 촬영/)).toBeInTheDocument();
    });
  });

  describe('Achievements Section', () => {
    const params = { id: 'cookting' };

    it('should render achievements section when available', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId('achievements-section')).toBeInTheDocument();
    });

    it('should display achievement titles', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText('App Store 심사 중')).toBeInTheDocument();
    });
  });

  describe('Project Links Section', () => {
    const params = { id: 'cookting' };

    it('should render links section', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId('project-links-section')).toBeInTheDocument();
    });

    it('should display GitHub link when available', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      const githubLink = screen.getByRole('link', { name: /github/i });
      expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    });
  });

  describe('Code Stats Section', () => {
    const params = { id: 'cookting' };

    it('should render code stats when available', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByTestId('code-stats-section')).toBeInTheDocument();
    });

    it('should display total lines of code', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByText(/15,?000/)).toBeInTheDocument();
    });
  });

  describe('Different Project Types', () => {
    it('should render desktop project (dev-utils-hub)', async () => {
      const Page = await ProjectDetailPage({ params: { id: 'dev-utils-hub' } });
      render(Page);
      expect(screen.getByText('Dev Utils Hub')).toBeInTheDocument();
      expect(screen.getByText('🛠️')).toBeInTheDocument();
    });

    it('should render iOS project (jellmodoro)', async () => {
      const Page = await ProjectDetailPage({ params: { id: 'jellmodoro' } });
      render(Page);
      expect(screen.getByText('Jellmodoro')).toBeInTheDocument();
      expect(screen.getByText('🍅')).toBeInTheDocument();
    });

    it('should render npm package project (jell-utils)', async () => {
      const Page = await ProjectDetailPage({ params: { id: 'jell-utils' } });
      render(Page);
      expect(screen.getByText('jell-utils.js')).toBeInTheDocument();
      expect(screen.getByText('📦')).toBeInTheDocument();
    });
  });

  describe('Back Navigation', () => {
    const params = { id: 'cookting' };

    it('should have back to projects link', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      const backLink = screen.getByRole('link', { name: /프로젝트 목록/i });
      expect(backLink).toHaveAttribute('href', '/#projects');
    });
  });

  describe('Accessibility', () => {
    const params = { id: 'cookting' };

    it('should have proper heading hierarchy', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('should have main element', async () => {
      const Page = await ProjectDetailPage({ params });
      render(Page);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});
