"use client";

import * as React from "react";
import { useState } from "react";
import { Code2, Server, Smartphone, Monitor, Cloud, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

// Skill categories and their technologies
export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "desktop"
  | "infrastructure"
  | "ai";

export type ProficiencyLevel =
  | "expert"
  | "advanced"
  | "intermediate"
  | "beginner";

export interface Skill {
  name: string;
  proficiency: ProficiencyLevel;
}

interface CategoryData {
  key: SkillCategory;
  label: string;
  icon: React.ReactNode;
  emoji: string;
  skills: Skill[];
}

const skillsData: CategoryData[] = [
  {
    key: "frontend",
    label: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    emoji: "🎨",
    skills: [
      { name: "React", proficiency: "expert" },
      { name: "Next.js", proficiency: "expert" },
      { name: "TypeScript", proficiency: "expert" },
      { name: "Tailwind CSS", proficiency: "expert" },
      { name: "Vue.js", proficiency: "expert" },
      { name: "HTML/CSS", proficiency: "expert" },
      { name: "JavaScript", proficiency: "expert" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: <Server className="w-4 h-4" />,
    emoji: "⚙️",
    skills: [
      { name: "Node.js", proficiency: "expert" },
      { name: "Express", proficiency: "expert" },
      { name: "NestJS", proficiency: "expert" },
      { name: "FastAPI", proficiency: "advanced" },
      { name: "Spring Boot", proficiency: "advanced" },
      { name: "Kotlin", proficiency: "advanced" },
      { name: "PostgreSQL", proficiency: "expert" },
      { name: "MongoDB", proficiency: "intermediate" },
      { name: "MSSQL", proficiency: "intermediate" },
      { name: "Redis", proficiency: "advanced" },
      { name: "GraphQL", proficiency: "advanced" },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    emoji: "📱",
    skills: [
      { name: "Flutter", proficiency: "expert" },
      { name: "Dart", proficiency: "expert" },
      { name: "React Native", proficiency: "advanced" },
      { name: "iOS (Swift)", proficiency: "expert" },
      { name: "Android (Kotlin)", proficiency: "intermediate" },
      { name: "WebView Bridge", proficiency: "expert" },
    ],
  },
  {
    key: "desktop",
    label: "Desktop",
    icon: <Monitor className="w-4 h-4" />,
    emoji: "💻",
    skills: [
      { name: "Tauri", proficiency: "advanced" },
      { name: "Electron", proficiency: "advanced" },
      { name: "Flutter Desktop", proficiency: "advanced" },
    ],
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    icon: <Cloud className="w-4 h-4" />,
    emoji: "☁️",
    skills: [
      { name: "Docker", proficiency: "advanced" },
      { name: "AWS", proficiency: "advanced" },
      { name: "GCP", proficiency: "intermediate" },
      { name: "Firebase", proficiency: "advanced" },
      { name: "Supabase", proficiency: "advanced" },
      { name: "CI/CD", proficiency: "advanced" },
      { name: "GitHub Actions", proficiency: "expert" },
      { name: "Vercel", proficiency: "expert" },
    ],
  },
  {
    key: "ai",
    label: "AI / ML",
    icon: <Cpu className="w-4 h-4" />,
    emoji: "🤖",
    skills: [
      { name: "Python", proficiency: "advanced" },
      { name: "LangChain", proficiency: "advanced" },
      { name: "OpenAI API", proficiency: "expert" },
    ],
  },
];

const proficiencyConfig: Record<
  ProficiencyLevel,
  { label: string; color: string; bgColor: string }
> = {
  expert: {
    label: "EXPERT",
    color: "text-foreground",
    bgColor: "bg-primary",
  },
  advanced: {
    label: "ADVANCED",
    color: "text-foreground",
    bgColor: "bg-secondary",
  },
  intermediate: {
    label: "INTERMEDIATE",
    color: "text-foreground",
    bgColor: "bg-accent",
  },
  beginner: {
    label: "BEGINNER",
    color: "text-foreground",
    bgColor: "bg-muted",
  },
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("frontend");

  const activeSkills = React.useMemo(() => {
    return skillsData.find((cat) => cat.key === activeCategory)?.skills || [];
  }, [activeCategory]);

  const panelId = `skills-panel-${activeCategory}`;

  // Count skills by proficiency for active category
  const proficiencyCounts = React.useMemo(() => {
    const counts: Record<ProficiencyLevel, number> = {
      expert: 0,
      advanced: 0,
      intermediate: 0,
      beginner: 0,
    };
    activeSkills.forEach((skill) => {
      counts[skill.proficiency]++;
    });
    return counts;
  }, [activeSkills]);

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 border-4 border-secondary -rotate-12 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 right-20 w-40 h-40 bg-accent/10 rotate-6 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm">
              <Code2 className="w-4 h-4" />
              <span>TECH STACK</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block">Skills &</span>
            <span className="block relative inline-block mt-2">
              <span className="relative z-10">Technologies</span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-secondary -z-10 block" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            다양한 플랫폼과 기술 스택을 활용하여{" "}
            <span className="font-bold text-foreground">최적의 솔루션</span>을
            제공합니다.
          </p>
        </div>

        {/* Category Tabs - Brutalist Style */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillsData.map((category) => {
            const isActive = activeCategory === category.key;
            return (
              <button
                key={category.key}
                role="tab"
                id={`tab-${category.key}`}
                aria-selected={isActive}
                aria-controls={panelId}
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  "group relative border-4 border-foreground transition-all duration-200",
                  "px-6 py-4 min-w-[140px]",
                  isActive
                    ? "bg-foreground text-background brutal-shadow"
                    : "bg-background text-foreground hover-brutal",
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="text-2xl"
                    role="img"
                    aria-label={category.label}
                  >
                    {category.emoji}
                  </span>
                  <div
                    className={cn(
                      "flex items-center gap-2 font-bold text-sm font-mono",
                      isActive ? "text-background" : "text-foreground",
                    )}
                  >
                    {category.icon}
                    <span>{category.label}</span>
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

        {/* Skills Count Display */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 border-2 border-foreground font-mono text-sm">
            <span className="text-muted-foreground">Current Stack: </span>
            <span className="font-bold text-primary">
              {activeSkills.length}
            </span>
            <span className="text-muted-foreground">
              {" "}
              {activeSkills.length === 1 ? "skill" : "skills"}
            </span>
          </div>
        </div>

        {/* Skills Panel */}
        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={`tab-${activeCategory}`}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {activeSkills.map((skill, index) => {
              const profConfig = proficiencyConfig[skill.proficiency];
              return (
                <div
                  key={skill.name}
                  data-testid="skill-badge"
                  data-proficiency={skill.proficiency}
                  className="group relative stagger-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative border-2 border-foreground bg-card hover-brutal transition-all duration-200 overflow-hidden">
                    <div className="px-4 py-3 flex items-center gap-2">
                      <span className="font-bold text-base">{skill.name}</span>
                      <div
                        className={cn(
                          "px-2 py-0.5 border border-foreground font-mono text-[10px] font-bold",
                          profConfig.bgColor,
                          profConfig.color,
                        )}
                      >
                        {profConfig.label}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proficiency Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(proficiencyConfig).map(([level, config], i) => {
              const count = proficiencyCounts[level as ProficiencyLevel];
              if (count === 0) return null;

              return (
                <div
                  key={level}
                  className="border-2 border-foreground p-4 text-center hover-lift stagger-fade-in"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="text-3xl font-bold font-mono mb-1">
                    {count}
                  </div>
                  <div
                    className={cn(
                      "inline-block px-2 py-1 border border-foreground font-mono text-[10px] font-bold mb-2",
                      config.bgColor,
                      config.color,
                    )}
                  >
                    {config.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {count === 1 ? "skill" : "skills"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
