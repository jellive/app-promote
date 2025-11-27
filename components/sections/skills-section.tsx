'use client';

import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Skill categories and their technologies
export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'desktop' | 'infrastructure' | 'ai';

export type ProficiencyLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner';

export interface Skill {
  name: string;
  proficiency: ProficiencyLevel;
}

interface CategoryData {
  key: SkillCategory;
  label: string;
  skills: Skill[];
}

const skillsData: CategoryData[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', proficiency: 'expert' },
      { name: 'Next.js', proficiency: 'expert' },
      { name: 'TypeScript', proficiency: 'expert' },
      { name: 'Tailwind CSS', proficiency: 'expert' },
      { name: 'Vue.js', proficiency: 'advanced' },
      { name: 'HTML/CSS', proficiency: 'expert' },
      { name: 'JavaScript', proficiency: 'expert' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 'expert' },
      { name: 'Express', proficiency: 'advanced' },
      { name: 'NestJS', proficiency: 'advanced' },
      { name: 'PostgreSQL', proficiency: 'advanced' },
      { name: 'MongoDB', proficiency: 'intermediate' },
      { name: 'Redis', proficiency: 'intermediate' },
      { name: 'GraphQL', proficiency: 'advanced' },
    ],
  },
  {
    key: 'mobile',
    label: 'Mobile',
    skills: [
      { name: 'Flutter', proficiency: 'expert' },
      { name: 'Dart', proficiency: 'expert' },
      { name: 'React Native', proficiency: 'advanced' },
      { name: 'iOS (Swift)', proficiency: 'intermediate' },
      { name: 'Android (Kotlin)', proficiency: 'intermediate' },
    ],
  },
  {
    key: 'desktop',
    label: 'Desktop',
    skills: [
      { name: 'Electron', proficiency: 'advanced' },
      { name: 'Tauri', proficiency: 'intermediate' },
      { name: 'Flutter Desktop', proficiency: 'advanced' },
      { name: 'WPF', proficiency: 'intermediate' },
    ],
  },
  {
    key: 'infrastructure',
    label: 'Infrastructure',
    skills: [
      { name: 'Docker', proficiency: 'advanced' },
      { name: 'Kubernetes', proficiency: 'intermediate' },
      { name: 'AWS', proficiency: 'advanced' },
      { name: 'GCP', proficiency: 'intermediate' },
      { name: 'CI/CD', proficiency: 'advanced' },
      { name: 'Vercel', proficiency: 'expert' },
    ],
  },
  {
    key: 'ai',
    label: 'AI / ML',
    skills: [
      { name: 'Python', proficiency: 'advanced' },
      { name: 'TensorFlow', proficiency: 'intermediate' },
      { name: 'PyTorch', proficiency: 'intermediate' },
      { name: 'LangChain', proficiency: 'advanced' },
      { name: 'OpenAI API', proficiency: 'expert' },
    ],
  },
];

const proficiencyColors: Record<ProficiencyLevel, string> = {
  expert: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
  advanced: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30',
  beginner: 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30',
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const activeSkills = React.useMemo(() => {
    return skillsData.find(cat => cat.key === activeCategory)?.skills || [];
  }, [activeCategory]);

  const panelId = `skills-panel-${activeCategory}`;

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            기술 스택
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            다양한 플랫폼과 기술을 활용하여 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {skillsData.map((category) => (
            <button
              key={category.key}
              role="tab"
              id={`tab-${category.key}`}
              aria-selected={activeCategory === category.key}
              aria-controls={panelId}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeCategory === category.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={`tab-${activeCategory}`}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {activeSkills.map((skill) => (
              <span
                key={skill.name}
                data-testid="skill-badge"
                data-proficiency={skill.proficiency}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium border transition-all',
                  'hover:scale-105',
                  proficiencyColors[skill.proficiency]
                )}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Proficiency Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500/50" />
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span>Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
