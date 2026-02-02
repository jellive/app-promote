import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project, ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string }
> = {
  [ProjectStatus.PRODUCTION]: {
    label: "LIVE",
    color: "text-foreground",
    bgColor: "bg-primary",
  },
  [ProjectStatus.APP_STORE_REVIEW]: {
    label: "REVIEW",
    bgColor: "bg-secondary",
    color: "text-foreground",
  },
  [ProjectStatus.DEVELOPMENT]: {
    label: "DEV",
    bgColor: "bg-accent",
    color: "text-foreground",
  },
  [ProjectStatus.ARCHIVE]: {
    label: "ARCHIVE",
    bgColor: "bg-muted",
    color: "text-foreground",
  },
};

const typeConfig: Record<string, { label: string; icon: string }> = {
  "full-stack-mobile": { label: "Full-Stack", icon: "📱" },
  "full-stack-web": { label: "Full-Stack", icon: "🌐" },
  desktop: { label: "Desktop", icon: "💻" },
  infrastructure: { label: "DevOps", icon: "🏗️" },
  "chrome-extension": { label: "Extension", icon: "🧩" },
  ios: { label: "iOS", icon: "📲" },
  "npm-package": { label: "Package", icon: "📦" },
  web: { label: "Web", icon: "🌐" },
  webrtc: { label: "WebRTC", icon: "📹" },
  "unity-webgl": { label: "Unity", icon: "🎮" },
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Flatten all tech stacks and limit to 3 most important
  const allTechs = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.desktop,
    ...project.techStack.infrastructure,
  ];
  const visibleTechs = allTechs.slice(0, 3);
  const remainingCount = allTechs.length - 3;

  const statusInfo = statusConfig[project.status];
  const typeInfo = typeConfig[project.type] || {
    label: project.type,
    icon: "🔧",
  };

  return (
    <article
      className="group relative stagger-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block"
        aria-label={`View ${project.name} project details`}
      >
        <div className="relative border-4 border-foreground bg-card hover-brutal transition-all duration-300 overflow-hidden">
          {/* Top Bar with Status */}
          <div className="flex items-center justify-between p-4 border-b-4 border-foreground">
            <div className="flex items-center gap-3">
              <span
                className="text-3xl"
                role="img"
                aria-label={`${project.name} icon`}
              >
                {project.emoji}
              </span>
              <div>
                <h3 className="font-bold text-xl leading-tight">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {typeInfo.icon} {typeInfo.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div
              className={cn(
                "px-3 py-1 border-2 border-foreground font-mono text-xs font-bold",
                statusInfo.bgColor,
                statusInfo.color,
              )}
            >
              {statusInfo.label}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Description */}
            <p className="text-sm leading-relaxed line-clamp-3 min-h-[3.6rem]">
              {project.shortDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {visibleTechs.map((tech) => (
                <span
                  key={tech}
                  data-testid="tech-badge"
                  className="px-3 py-1 bg-foreground text-background font-mono text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="px-3 py-1 border-2 border-foreground font-mono text-xs font-bold">
                  +{remainingCount}
                </span>
              )}
            </div>

            {/* Project Period */}
            <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-border">
              <span className="text-xs font-mono text-muted-foreground">
                {project.period}
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </Link>
    </article>
  );
}
