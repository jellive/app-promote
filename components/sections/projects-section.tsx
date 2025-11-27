'use client';

import * as React from 'react';
import { useState } from 'react';
import { projectsData, ProjectStatus } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'production' | 'archive';

const filters: { key: FilterType; label: string; count: number }[] = [
  {
    key: 'all',
    label: '전체',
    count: projectsData.length,
  },
  {
    key: 'production',
    label: 'Production',
    count: projectsData.filter(p => p.status === ProjectStatus.PRODUCTION || p.status === ProjectStatus.APP_STORE_REVIEW || p.status === ProjectStatus.DEVELOPMENT).length,
  },
  {
    key: 'archive',
    label: 'Archive',
    count: projectsData.filter(p => p.status === ProjectStatus.ARCHIVE).length,
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = React.useMemo(() => {
    switch (activeFilter) {
      case 'production':
        return projectsData.filter(
          p => p.status === ProjectStatus.PRODUCTION ||
               p.status === ProjectStatus.APP_STORE_REVIEW ||
               p.status === ProjectStatus.DEVELOPMENT
        );
      case 'archive':
        return projectsData.filter(p => p.status === ProjectStatus.ARCHIVE);
      default:
        return projectsData;
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프로젝트
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            모바일부터 데스크톱까지, 다양한 플랫폼에서 개발한 프로젝트들입니다.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          role="tablist"
          aria-label="Project filters"
          className="flex justify-center gap-2 mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              role="tab"
              aria-selected={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
