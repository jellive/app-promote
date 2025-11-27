import * as React from 'react';
import Link from 'next/link';
import { type Project, ProjectStatus } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<ProjectStatus, string> = {
  [ProjectStatus.PRODUCTION]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [ProjectStatus.APP_STORE_REVIEW]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  [ProjectStatus.DEVELOPMENT]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [ProjectStatus.ARCHIVE]: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
};

const typeLabels: Record<string, string> = {
  'full-stack-mobile': 'Full-Stack Mobile',
  'desktop': 'Desktop',
  'infrastructure': 'Infrastructure',
  'chrome-extension': 'Chrome Extension',
  'ios': 'iOS',
  'npm-package': 'NPM Package',
};

export function ProjectCard({ project }: ProjectCardProps) {
  // Flatten all tech stacks and limit to 5
  const allTechs = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.infrastructure,
    ...project.techStack.desktop,
  ];
  const visibleTechs = allTechs.slice(0, 5);
  const remainingCount = allTechs.length - 5;

  return (
    <article className="group relative">
      <Link
        href={`/projects/${project.id}`}
        className="block"
        aria-label={`View ${project.name} project details`}
      >
        <div
          className={cn(
            'rounded-lg border bg-card p-6',
            'transition-all duration-300',
            'hover:shadow-lg hover:scale-[1.02]',
            'dark:hover:shadow-gray-800/50'
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl" role="img" aria-label={`${project.name} icon`}>
                {project.emoji}
              </span>
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {typeLabels[project.type] || project.type}
                </span>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className={cn(
                'px-2 py-1 rounded-full text-xs font-medium capitalize',
                statusColors[project.status]
              )}
            >
              {project.status.replace('-', ' ')}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {visibleTechs.map((tech) => (
              <span
                key={tech}
                data-testid="tech-badge"
                className="px-2 py-1 bg-muted rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground">
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
