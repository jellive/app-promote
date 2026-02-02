/**
 * Skeleton component for ProjectCard loading state
 * Matches the layout of ProjectCard to prevent CLS
 */

import { cn } from "@/lib/utils";

interface ProjectCardSkeletonProps {
  className?: string;
}

export function ProjectCardSkeleton({ className }: ProjectCardSkeletonProps) {
  return (
    <div
      data-testid="project-card-skeleton"
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6",
        "animate-pulse",
        className,
      )}
    >
      {/* Header with emoji and title */}
      <div className="flex items-start gap-3 mb-4">
        {/* Emoji placeholder */}
        <div className="w-10 h-10 rounded-lg bg-muted" />

        <div className="flex-1 space-y-2">
          {/* Title placeholder */}
          <div className="h-5 w-32 bg-muted rounded" />
          {/* Badge placeholder */}
          <div className="h-4 w-20 bg-muted rounded-full" />
        </div>
      </div>

      {/* Description placeholder */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
      </div>

      {/* Tech stack placeholder */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 w-16 bg-muted rounded-full" />
        <div className="h-6 w-20 bg-muted rounded-full" />
        <div className="h-6 w-14 bg-muted rounded-full" />
      </div>

      {/* Footer placeholder */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="h-4 w-24 bg-muted rounded" />
        <div className="h-8 w-20 bg-muted rounded-md" />
      </div>
    </div>
  );
}

export function ProjectCardSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div
      data-testid="project-card-skeleton-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
