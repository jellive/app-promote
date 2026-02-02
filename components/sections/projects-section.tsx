"use client";

import * as React from "react";
import { useState } from "react";
import { Folder, Sparkles, Archive, Grid3x3 } from "lucide-react";
import { projectsData, ProjectStatus } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

type FilterType = "all" | "production" | "archive";

const filters: {
  key: FilterType;
  label: string;
  count: number;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    key: "all",
    label: "전체",
    count: projectsData.length,
    icon: <Grid3x3 className="w-4 h-4" />,
    description: "모든 프로젝트",
  },
  {
    key: "production",
    label: "Active",
    count: projectsData.filter(
      (p) =>
        p.status === ProjectStatus.PRODUCTION ||
        p.status === ProjectStatus.APP_STORE_REVIEW ||
        p.status === ProjectStatus.DEVELOPMENT,
    ).length,
    icon: <Sparkles className="w-4 h-4" />,
    description: "진행중인 프로젝트",
  },
  {
    key: "archive",
    label: "Archive",
    count: projectsData.filter((p) => p.status === ProjectStatus.ARCHIVE)
      .length,
    icon: <Archive className="w-4 h-4" />,
    description: "완료된 프로젝트",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = React.useMemo(() => {
    switch (activeFilter) {
      case "production":
        return projectsData.filter(
          (p) =>
            p.status === ProjectStatus.PRODUCTION ||
            p.status === ProjectStatus.APP_STORE_REVIEW ||
            p.status === ProjectStatus.DEVELOPMENT,
        );
      case "archive":
        return projectsData.filter((p) => p.status === ProjectStatus.ARCHIVE);
      default:
        return projectsData;
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-10 right-20 w-40 h-40 border-4 border-primary/20 rotate-12 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 -rotate-6 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm">
              <Folder className="w-4 h-4" />
              <span>PORTFOLIO</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block">Selected</span>
            <span className="block relative inline-block mt-2">
              <span className="relative z-10">Projects</span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 block" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            모바일부터 데스크톱까지,{" "}
            <span className="font-bold text-foreground">
              {projectsData.length}개의 프로젝트
            </span>
            를 통해 다양한 플랫폼에서 솔루션을 구현했습니다.
          </p>
        </div>

        {/* Filter Tabs - Brutalist Style */}
        <div
          role="tablist"
          aria-label="Project filters"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "group relative border-4 border-foreground transition-all duration-200",
                  "px-6 py-4 min-w-[160px]",
                  isActive
                    ? "bg-foreground text-background brutal-shadow"
                    : "bg-background text-foreground hover-brutal",
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      "flex items-center gap-2 font-bold text-sm font-mono",
                      isActive ? "text-background" : "text-foreground",
                    )}
                  >
                    {filter.icon}
                    <span>{filter.label}</span>
                  </div>

                  <div
                    className={cn(
                      "text-2xl font-black font-mono",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {filter.count}
                  </div>

                  <div
                    className={cn(
                      "text-xs",
                      isActive ? "text-background/80" : "text-muted-foreground",
                    )}
                  >
                    {filter.description}
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground" />
                )}
              </button>
            );
          })}
        </div>

        {/* Project Count */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 border-2 border-foreground font-mono text-sm">
            <span className="text-muted-foreground">Showing </span>
            <span className="font-bold text-primary">
              {filteredProjects.length}
            </span>
            <span className="text-muted-foreground">
              {" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>
        </div>

        {/* Projects Grid - Masonry-inspired Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 border-4 border-dashed border-foreground/30">
              <Archive className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-bold text-muted-foreground">
                No projects found
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 border-4 border-foreground bg-card brutal-shadow-lg">
            <p className="text-lg font-bold mb-4">
              더 많은 프로젝트가 궁금하신가요?
            </p>
            <a
              href="https://github.com/jellive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-2 border-foreground hover-lift transition-transform"
            >
              <span>GitHub에서 더 보기</span>
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
