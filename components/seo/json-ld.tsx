/**
 * JSON-LD Structured Data Components for SEO
 * Implements Schema.org vocabulary for rich search results
 */

import { Project } from "@/data/projects";

interface PersonJsonLdProps {
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  sameAs?: string[];
}

interface WebsiteJsonLdProps {
  name: string;
  url: string;
  description: string;
}

interface SoftwareApplicationJsonLdProps {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  author: string;
  url?: string;
}

// Person JSON-LD for portfolio owner
export function PersonJsonLd({
  name,
  jobTitle,
  url,
  email,
  sameAs = [],
}: PersonJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    email,
    sameAs,
    knowsAbout: [
      "iOS Development",
      "Flutter",
      "React",
      "Next.js",
      "TypeScript",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Website JSON-LD for the portfolio site
export function WebsiteJsonLd({ name, url, description }: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    author: {
      "@type": "Person",
      name: "Jell",
    },
    inLanguage: "ko-KR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Software Application JSON-LD for project pages
export function SoftwareApplicationJsonLd({
  name,
  description,
  applicationCategory,
  operatingSystem,
  author,
  url,
}: SoftwareApplicationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    ...(operatingSystem && { operatingSystem }),
    author: {
      "@type": "Person",
      name: author,
    },
    ...(url && { url }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Project JSON-LD generator from project data
export function ProjectJsonLd({ project }: { project: Project }) {
  const getOperatingSystem = () => {
    const techStack = [
      ...project.techStack.frontend,
      ...project.techStack.backend,
      ...project.techStack.desktop,
    ];

    if (
      techStack.some(
        (t) =>
          t.toLowerCase().includes("ios") || t.toLowerCase().includes("swift"),
      )
    ) {
      return "iOS";
    }
    if (techStack.some((t) => t.toLowerCase().includes("flutter"))) {
      return "iOS, Android";
    }
    if (
      techStack.some(
        (t) =>
          t.toLowerCase().includes("electron") ||
          t.toLowerCase().includes("tauri"),
      )
    ) {
      return "Windows, macOS, Linux";
    }
    return undefined;
  };

  const getApplicationCategory = () => {
    const typeMap: Record<string, string> = {
      "full-stack-mobile": "MobileApplication",
      desktop: "DesktopApplication",
      ios: "MobileApplication",
      "chrome-extension": "BrowserApplication",
      "npm-package": "DeveloperApplication",
      infrastructure: "DeveloperApplication",
    };
    return typeMap[project.type] || "Application";
  };

  return (
    <SoftwareApplicationJsonLd
      name={project.name}
      description={project.description}
      applicationCategory={getApplicationCategory()}
      operatingSystem={getOperatingSystem()}
      author="Jell"
      url={project.links.live || project.links.github}
    />
  );
}

// Combined JSON-LD for home page
export function HomePageJsonLd() {
  return (
    <>
      <PersonJsonLd
        name="Jell"
        jobTitle="풀스택 개발자"
        url="https://jell.kr"
        email="jellive7@gmail.com"
        sameAs={[
          "https://github.com/jellive",
          "https://www.linkedin.com/in/han-goon-yoo-429980113/",
          "https://blog.jell.kr",
        ]}
      />
      <WebsiteJsonLd
        name="Jell Portfolio"
        url="https://jell.kr"
        description="8년차 풀스택 개발자 Jell의 포트폴리오. iOS, Flutter, React, Next.js 등 다양한 기술 스택으로 사용자 중심의 앱을 개발합니다."
      />
    </>
  );
}
