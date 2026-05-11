import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  Calendar,
  User,
  Trophy,
  BarChart3,
  Link2,
  Smartphone,
  Lock,
  ImageIcon,
} from "lucide-react";
import {
  getProjectById,
  projectsData,
  Project,
  ProjectStatus,
  ProjectType,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectJsonLd } from "@/components/seo/json-ld";

interface PageProps {
  params: { id: string };
}

// Status badge component
function StatusBadge({ status }: { status: ProjectStatus }) {
  const statusConfig: Record<
    ProjectStatus,
    { label: string; bgColor: string; color: string }
  > = {
    [ProjectStatus.PRODUCTION]: {
      label: "LIVE",
      bgColor: "bg-primary",
      color: "text-background",
    },
    [ProjectStatus.APP_STORE_REVIEW]: {
      label: "REVIEW",
      bgColor: "bg-secondary",
      color: "text-foreground",
    },
    [ProjectStatus.DEVELOPMENT]: {
      label: "DEV",
      bgColor: "bg-accent",
      color: "text-background",
    },
    [ProjectStatus.ARCHIVE]: {
      label: "ARCHIVE",
      bgColor: "bg-muted",
      color: "text-foreground",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "px-3 py-1 border-2 border-foreground font-mono text-xs font-bold",
        config.bgColor,
        config.color,
      )}
    >
      {config.label}
    </span>
  );
}

// Type badge component
function TypeBadge({ type }: { type: ProjectType }) {
  const typeConfig: Record<
    ProjectType,
    { label: string; icon: React.ElementType }
  > = {
    [ProjectType.FULL_STACK_MOBILE]: {
      label: "Full Stack Mobile",
      icon: Layers,
    },
    [ProjectType.DESKTOP]: { label: "Desktop", icon: Monitor },
    [ProjectType.INFRASTRUCTURE]: { label: "Infrastructure", icon: Server },
    [ProjectType.CHROME_EXTENSION]: {
      label: "Chrome Extension",
      icon: Sparkles,
    },
    [ProjectType.IOS]: { label: "iOS", icon: Apple },
    [ProjectType.NPM_PACKAGE]: { label: "npm Package", icon: Package },
    [ProjectType.WEB]: { label: "Web", icon: Globe },
    [ProjectType.WEBRTC]: { label: "WebRTC", icon: Video },
    [ProjectType.UNITY_WEBGL]: { label: "Unity WebGL", icon: Gamepad2 },
    [ProjectType.FULL_STACK_WEB]: { label: "Full Stack Web", icon: Workflow },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 border-2 border-foreground bg-background font-mono text-xs font-bold">
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
}

// Tech Stack Section Component
function TechStackSection({ project }: { project: Project }) {
  const categories = [
    {
      key: "frontend",
      label: "Frontend",
      icon: Code2,
      items: project.techStack.frontend,
      color: "bg-primary",
    },
    {
      key: "backend",
      label: "Backend",
      icon: Server,
      items: project.techStack.backend,
      color: "bg-secondary",
    },
    {
      key: "infrastructure",
      label: "Infrastructure",
      icon: Layers,
      items: project.techStack.infrastructure,
      color: "bg-accent",
    },
    {
      key: "desktop",
      label: "Desktop",
      icon: Monitor,
      items: project.techStack.desktop,
      color: "bg-primary",
    },
  ].filter((cat) => cat.items.length > 0);

  return (
    <section
      data-testid="tech-stack-section"
      className="space-y-6 stagger-fade-in"
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          TECH STACK
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={category.key}
              className="border-4 border-foreground bg-card p-6 brutal-shadow hover-brutal transition-all stagger-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={cn(
                    "p-2 border-2 border-foreground",
                    category.color,
                  )}
                >
                  <Icon className="w-4 h-4 text-background" />
                </div>
                <span className="font-bold text-lg">{category.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-bold border-2 border-foreground bg-background"
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
    <section
      data-testid="features-section"
      className="space-y-6 stagger-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          KEY FEATURES
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.features.map((feature, index) => (
          <div
            key={index}
            className="border-4 border-foreground bg-card p-6 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: `${0.3 + index * 0.05}s` }}
          >
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
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
    <section
      data-testid="achievements-section"
      className="space-y-6 stagger-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          <Trophy className="inline-block w-4 h-4 mr-2" />
          ACHIEVEMENTS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.achievements.map((achievement, index) => (
          <div
            key={index}
            className="border-4 border-foreground bg-card p-6 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: `${0.5 + index * 0.05}s` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{achievement.icon || "🏆"}</span>
              <div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Screenshots Section Component
function ScreenshotsSection({ project }: { project: Project }) {
  if (!project.screenshots || project.screenshots.length === 0) {
    return null;
  }

  return (
    <section
      data-testid="screenshots-section"
      className="space-y-6 stagger-fade-in"
      style={{ animationDelay: "0.45s" }}
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          <ImageIcon className="inline-block w-4 h-4 mr-2" />
          SCREENSHOTS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.screenshots.map((shot, index) => (
          <div
            key={shot.filename}
            className="border-4 border-foreground bg-card brutal-shadow hover-brutal transition-all overflow-hidden stagger-fade-in"
            style={{ animationDelay: `${0.5 + index * 0.05}s` }}
          >
            <Image
              src={`/app-screenshot/${shot.filename}`}
              alt={shot.alt}
              width={800}
              height={500}
              className="w-full h-auto object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
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
    {
      label: "Total",
      value: project.codeStats.total,
      show: true,
      color: "bg-primary",
    },
    {
      label: "Frontend",
      value: project.codeStats.frontend,
      show: !!project.codeStats.frontend,
      color: "bg-secondary",
    },
    {
      label: "Backend",
      value: project.codeStats.backend,
      show: !!project.codeStats.backend,
      color: "bg-accent",
    },
    {
      label: "Tests",
      value: project.codeStats.tests,
      show: !!project.codeStats.tests,
      color: "bg-primary",
    },
  ].filter((stat) => stat.show);

  return (
    <section
      data-testid="code-stats-section"
      className="space-y-6 stagger-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          <BarChart3 className="inline-block w-4 h-4 mr-2" />
          CODE STATS
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="border-4 border-foreground bg-card p-6 text-center brutal-shadow hover-lift transition-all stagger-fade-in"
            style={{ animationDelay: `${0.7 + index * 0.05}s` }}
          >
            <div
              className={cn(
                "inline-block px-3 py-1 border-2 border-foreground mb-3",
                stat.color,
              )}
            >
              <span className="text-2xl font-black font-mono text-background">
                {stat.value?.toLocaleString()}
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-muted-foreground">
              {stat.label} Lines
            </div>
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
      key: "github",
      label: "GitHub",
      href: project.links.github,
      icon: Github,
      show: !!project.links.github && !project.private,
      color: "bg-foreground text-background",
    },
    {
      key: "live",
      label: "Live Demo",
      href: project.links.live,
      icon: ExternalLink,
      show: !!project.links.live,
      color: "bg-primary text-background",
    },
    {
      key: "appStore",
      label: "App Store",
      href: project.links.appStore,
      icon: Apple,
      show: !!project.links.appStore,
      color: "bg-secondary text-foreground",
    },
    {
      key: "playStore",
      label: "Google Play",
      href: project.links.playStore,
      icon: Smartphone,
      show: !!project.links.playStore,
      color: "bg-green-600 text-white",
    },
    {
      key: "chromeWebStore",
      label: "Chrome Web Store",
      href: project.links.chromeWebStore,
      icon: Chrome,
      show: !!project.links.chromeWebStore,
      color: "bg-accent text-background",
    },
    {
      key: "npm",
      label: "npm",
      href: project.links.npm,
      icon: Package,
      show: !!project.links.npm,
      color: "bg-foreground text-background",
    },
  ].filter((link) => link.show);

  const showPrivateBadge = !!project.private;

  if (links.length === 0 && !showPrivateBadge) {
    return null;
  }

  return (
    <section
      data-testid="project-links-section"
      className="space-y-6 stagger-fade-in"
      style={{ animationDelay: "0.8s" }}
    >
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-foreground text-background font-mono text-sm font-bold">
          <Link2 className="inline-block w-4 h-4 mr-2" />
          PROJECT LINKS
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {showPrivateBadge && (
          <span
            data-testid="private-repo-badge"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-muted text-muted-foreground font-bold font-mono brutal-shadow stagger-fade-in"
            style={{ animationDelay: "0.9s" }}
            title="Source code is in a private repository"
          >
            <Lock className="w-4 h-4" />
            Private repo
          </span>
        )}
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-bold font-mono brutal-shadow hover-brutal transition-all stagger-fade-in",
                link.color,
              )}
              style={{
                animationDelay: `${(showPrivateBadge ? 0.95 : 0.9) + index * 0.05}s`,
              }}
            >
              <Icon className="w-4 h-4" />
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

// SSG: pre-render every known project id; unknown ids return 404.
export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

// Main Page Component
export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 md:py-32 relative overflow-hidden">
      <ProjectJsonLd project={project} />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-secondary rotate-12 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 -rotate-6 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background font-mono font-bold text-sm brutal-shadow-sm hover-brutal transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          프로젝트 목록
        </Link>

        {/* Hero Section */}
        <header className="mb-16 max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl">{project.emoji}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="relative inline-block">
                <span className="relative z-10">{project.name}</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 block" />
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <TypeBadge type={project.type} />
            <StatusBadge status={project.status} />
          </div>

          <p className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Period:</span>
              <span className="font-bold">{project.period}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background">
              <User className="w-4 h-4 text-secondary" />
              <span className="text-muted-foreground">Role:</span>
              <span className="font-bold">{project.role}</span>
            </div>
          </div>
        </header>

        {/* Description */}
        <section className="mb-16 max-w-5xl">
          <div className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-12 max-w-5xl">
          <TechStackSection project={project} />
          <FeaturesSection project={project} />
          <AchievementsSection project={project} />
          <ScreenshotsSection project={project} />
          <CodeStatsSection project={project} />
          <ProjectLinksSection project={project} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 max-w-5xl">
          <div className="p-8 border-4 border-foreground bg-card brutal-shadow-lg text-center">
            <p className="text-lg font-bold mb-4">
              더 많은 프로젝트가 궁금하신가요?
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-2 border-foreground hover-lift transition-transform font-mono"
            >
              <span>모든 프로젝트 보기</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
