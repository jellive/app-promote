import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Apple,
  Package,
  Code2,
  Layers,
  Server,
  Monitor,
  Sparkles,
  Globe,
  Video,
  Gamepad2,
  Workflow,
  Chrome,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  projectsData,
  getProjectById,
  Project,
  ProjectStatus,
  ProjectType,
} from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectJsonLd } from '@/components/seo/json-ld';

interface PageProps {
  params: { id: string };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} - Jell Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} ${project.emoji}`,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} - Jell Portfolio`,
      description: project.shortDescription,
    },
  };
}

// Status badge component
function StatusBadge({ status }: { status: ProjectStatus }) {
  const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
    [ProjectStatus.PRODUCTION]: {
      label: 'Production',
      className: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
    },
    [ProjectStatus.APP_STORE_REVIEW]: {
      label: 'App Store 심사중',
      className: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30',
    },
    [ProjectStatus.DEVELOPMENT]: {
      label: '개발중',
      className: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
    },
    [ProjectStatus.ARCHIVE]: {
      label: 'Archive',
      className: 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30',
    },
  };

  const config = statusConfig[status];

  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-medium border', config.className)}>
      {config.label}
    </span>
  );
}

// Type badge component
function TypeBadge({ type }: { type: ProjectType }) {
  const typeConfig: Record<ProjectType, { label: string; icon: React.ElementType }> = {
    [ProjectType.FULL_STACK_MOBILE]: { label: 'Full Stack Mobile', icon: Layers },
    [ProjectType.DESKTOP]: { label: 'Desktop', icon: Monitor },
    [ProjectType.INFRASTRUCTURE]: { label: 'Infrastructure', icon: Server },
    [ProjectType.CHROME_EXTENSION]: { label: 'Chrome Extension', icon: Sparkles },
    [ProjectType.IOS]: { label: 'iOS', icon: Apple },
    [ProjectType.NPM_PACKAGE]: { label: 'npm Package', icon: Package },
    [ProjectType.WEB]: { label: 'Web', icon: Globe },
    [ProjectType.WEBRTC]: { label: 'WebRTC', icon: Video },
    [ProjectType.UNITY_WEBGL]: { label: 'Unity WebGL', icon: Gamepad2 },
    [ProjectType.FULL_STACK_WEB]: { label: 'Full Stack Web', icon: Workflow },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
}

// Tech Stack Section Component
function TechStackSection({ project }: { project: Project }) {
  const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code2, items: project.techStack.frontend },
    { key: 'backend', label: 'Backend', icon: Server, items: project.techStack.backend },
    { key: 'infrastructure', label: 'Infrastructure', icon: Layers, items: project.techStack.infrastructure },
    { key: 'desktop', label: 'Desktop', icon: Monitor, items: project.techStack.desktop },
  ].filter(cat => cat.items.length > 0);

  return (
    <section data-testid="tech-stack-section" className="space-y-4">
      <h2 className="text-xl font-semibold">기술 스택</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.key}
              className="p-4 rounded-lg bg-muted/50 border"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">{category.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-background border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection({ project }: { project: Project }) {
  return (
    <section data-testid="features-section" className="space-y-4">
      <h2 className="text-xl font-semibold">주요 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.features.map((feature, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-muted/50 border hover:border-primary/50 transition-colors"
          >
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Achievements Section Component
function AchievementsSection({ project }: { project: Project }) {
  if (!project.achievements || project.achievements.length === 0) {
    return null;
  }

  return (
    <section data-testid="achievements-section" className="space-y-4">
      <h2 className="text-xl font-semibold">성과</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              'flex items-start gap-3 p-4 rounded-lg',
              'bg-gradient-to-r from-primary/5 to-transparent',
              'border border-primary/10'
            )}
          >
            <span className="text-2xl">{achievement.icon || '🏆'}</span>
            <div>
              <h3 className="font-medium">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Code Stats Section Component
function CodeStatsSection({ project }: { project: Project }) {
  if (!project.codeStats) {
    return null;
  }

  const stats = [
    { label: '총 코드', value: project.codeStats.total, show: true },
    { label: 'Frontend', value: project.codeStats.frontend, show: !!project.codeStats.frontend },
    { label: 'Backend', value: project.codeStats.backend, show: !!project.codeStats.backend },
    { label: 'Tests', value: project.codeStats.tests, show: !!project.codeStats.tests },
  ].filter(stat => stat.show);

  return (
    <section data-testid="code-stats-section" className="space-y-4">
      <h2 className="text-xl font-semibold">코드 통계</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-lg bg-muted/50 border text-center"
          >
            <div className="text-2xl font-bold text-primary">
              {stat.value?.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label} Lines</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Project Links Section Component
function ProjectLinksSection({ project }: { project: Project }) {
  const links = [
    {
      key: 'github',
      label: 'GitHub',
      href: project.links.github,
      icon: Github,
      show: !!project.links.github,
    },
    {
      key: 'live',
      label: 'Live Demo',
      href: project.links.live,
      icon: ExternalLink,
      show: !!project.links.live,
    },
    {
      key: 'appStore',
      label: 'App Store',
      href: project.links.appStore,
      icon: Apple,
      show: !!project.links.appStore,
    },
    {
      key: 'chromeWebStore',
      label: 'Chrome Web Store',
      href: project.links.chromeWebStore,
      icon: Chrome,
      show: !!project.links.chromeWebStore,
    },
    {
      key: 'npm',
      label: 'npm',
      href: project.links.npm,
      icon: Package,
      show: !!project.links.npm,
    },
  ].filter(link => link.show);

  if (links.length === 0) {
    return null;
  }

  return (
    <section data-testid="project-links-section" className="space-y-4">
      <h2 className="text-xl font-semibold">링크</h2>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.key}
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}

// Main Page Component
export default async function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-8 md:py-16">
      <ProjectJsonLd project={project} />
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          프로젝트 목록으로 돌아가기
        </Link>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-4xl">{project.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <TypeBadge type={project.type} />
            <StatusBadge status={project.status} />
          </div>

          <p className="text-lg text-muted-foreground mb-4">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>📅 {project.period}</span>
            <span>👤 {project.role}</span>
          </div>
        </header>

        {/* Description */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Content Sections */}
        <div className="space-y-12">
          <TechStackSection project={project} />
          <FeaturesSection project={project} />
          <AchievementsSection project={project} />
          <CodeStatsSection project={project} />
          <ProjectLinksSection project={project} />
        </div>
      </div>
    </main>
  );
}
