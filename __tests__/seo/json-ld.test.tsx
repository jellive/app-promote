/**
 * @fileoverview Tests for JSON-LD Structured Data Components
 * TDD: Validate Schema.org structured data generation
 */

import { render } from "@testing-library/react";
import {
  PersonJsonLd,
  WebsiteJsonLd,
  SoftwareApplicationJsonLd,
  ProjectJsonLd,
  HomePageJsonLd,
} from "@/components/seo/json-ld";
import { getProjectById } from "@/data/projects";

// Helper to extract JSON-LD content from rendered component
function getJsonLdContent(container: HTMLElement): object | null {
  const script = container.querySelector('script[type="application/ld+json"]');
  if (!script?.textContent) return null;
  return JSON.parse(script.textContent);
}

describe("PersonJsonLd Component", () => {
  const defaultProps = {
    name: "Jell",
    jobTitle: "풀스택 개발자",
    url: "https://app.jell.kr",
    email: "jellive7@gmail.com",
    sameAs: ["https://github.com/jellive"],
  };

  it("should render script tag with application/ld+json type", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it("should have correct @context", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.["@context"]).toBe("https://schema.org");
  });

  it("should have @type as Person", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.["@type"]).toBe("Person");
  });

  it("should include person name", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.name).toBe("Jell");
  });

  it("should include job title", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.jobTitle).toBe("풀스택 개발자");
  });

  it("should include knowsAbout skills", () => {
    const { container } = render(<PersonJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.knowsAbout).toContain("iOS Development");
    expect(jsonLd?.knowsAbout).toContain("Flutter");
    expect(jsonLd?.knowsAbout).toContain("React");
  });

  it("should include alternateName", () => {
    const { container } = render(
      <PersonJsonLd {...defaultProps} alternateName="Jell" />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.alternateName).toBe("Jell");
  });

  it("should include seeks when provided", () => {
    const seeks = {
      "@type": "JobPosting" as const,
      title: "시니어 풀스택 개발자",
      description: "풀타임 또는 프리랜서 시니어 포지션",
    };
    const { container } = render(
      <PersonJsonLd {...defaultProps} seeks={seeks} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    const seeksData = jsonLd?.seeks as Record<string, unknown>;
    expect(seeksData?.["@type"]).toBe("JobPosting");
    expect(seeksData?.title).toBe("시니어 풀스택 개발자");
  });
});

describe("WebsiteJsonLd Component", () => {
  const defaultProps = {
    name: "Jell Portfolio",
    url: "https://app.jell.kr",
    description: "Portfolio description",
  };

  it("should render script tag", () => {
    const { container } = render(<WebsiteJsonLd {...defaultProps} />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it("should have @type as WebSite", () => {
    const { container } = render(<WebsiteJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.["@type"]).toBe("WebSite");
  });

  it("should include site name", () => {
    const { container } = render(<WebsiteJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.name).toBe("Jell Portfolio");
  });

  it("should include inLanguage as Korean", () => {
    const { container } = render(<WebsiteJsonLd {...defaultProps} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.inLanguage).toBe("ko-KR");
  });
});

describe("SoftwareApplicationJsonLd Component", () => {
  const defaultProps = {
    name: "Test App",
    description: "A test application",
    applicationCategory: "MobileApplication",
    operatingSystem: "iOS",
    author: "Jell",
    url: "https://example.com",
  };

  it("should have @type as SoftwareApplication", () => {
    const { container } = render(
      <SoftwareApplicationJsonLd {...defaultProps} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.["@type"]).toBe("SoftwareApplication");
  });

  it("should include application name", () => {
    const { container } = render(
      <SoftwareApplicationJsonLd {...defaultProps} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.name).toBe("Test App");
  });

  it("should include application category", () => {
    const { container } = render(
      <SoftwareApplicationJsonLd {...defaultProps} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.applicationCategory).toBe("MobileApplication");
  });

  it("should include operating system when provided", () => {
    const { container } = render(
      <SoftwareApplicationJsonLd {...defaultProps} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.operatingSystem).toBe("iOS");
  });

  it("should include author as Person object", () => {
    const { container } = render(
      <SoftwareApplicationJsonLd {...defaultProps} />,
    );
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    const author = jsonLd?.author as Record<string, unknown>;
    expect(author?.["@type"]).toBe("Person");
    expect(author?.name).toBe("Jell");
  });
});

describe("ProjectJsonLd Component", () => {
  it("should render for cookting project", () => {
    const project = getProjectById("cookting")!;
    const { container } = render(<ProjectJsonLd project={project} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.name).toBe("Cookting");
  });

  it("should render for dev-utils-hub project", () => {
    const project = getProjectById("dev-utils-hub")!;
    const { container } = render(<ProjectJsonLd project={project} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.name).toBe("Dev Utils Hub");
  });

  it("should detect mobile application category for Flutter projects", () => {
    const project = getProjectById("cookting")!;
    const { container } = render(<ProjectJsonLd project={project} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.applicationCategory).toBe("MobileApplication");
  });

  it("should detect desktop application category for desktop projects", () => {
    const project = getProjectById("dev-utils-hub")!;
    const { container } = render(<ProjectJsonLd project={project} />);
    const jsonLd = getJsonLdContent(container) as Record<string, unknown>;
    expect(jsonLd?.applicationCategory).toBe("DesktopApplication");
  });
});

describe("HomePageJsonLd Component", () => {
  it("should render Person, Website, and ProfilePage JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    expect(scripts.length).toBe(3);
  });

  it("should include Person JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const personJsonLd = jsonLdContents.find((j) => j["@type"] === "Person");
    expect(personJsonLd).toBeDefined();
    expect(personJsonLd?.name).toBe("유한군");
  });

  it("should include WebSite JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const websiteJsonLd = jsonLdContents.find((j) => j["@type"] === "WebSite");
    expect(websiteJsonLd).toBeDefined();
    expect(websiteJsonLd?.name).toBe("Jell Portfolio");
  });

  it("should include social media links in sameAs", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const personJsonLd = jsonLdContents.find((j) => j["@type"] === "Person");
    const sameAs = personJsonLd?.sameAs as string[];
    expect(sameAs).toContain("https://github.com/jellive");
  });

  it("should include ProfilePage JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const profilePage = jsonLdContents.find(
      (j) => j["@type"] === "ProfilePage",
    );
    expect(profilePage).toBeDefined();
    expect(profilePage?.name).toContain("Jell");
    expect(profilePage?.url).toBe("https://app.jell.kr");
  });

  it("should include seeks in Person JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const personJsonLd = jsonLdContents.find((j) => j["@type"] === "Person");
    const seeks = personJsonLd?.seeks as Record<string, unknown>;
    expect(seeks?.["@type"]).toBe("JobPosting");
    expect(seeks?.title).toBe("시니어 풀스택 개발자");
  });

  it("should include alternateName in Person JSON-LD", () => {
    const { container } = render(<HomePageJsonLd />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    const jsonLdContents = Array.from(scripts).map(
      (script) =>
        JSON.parse(script.textContent || "{}") as Record<string, unknown>,
    );
    const personJsonLd = jsonLdContents.find((j) => j["@type"] === "Person");
    expect(personJsonLd?.alternateName).toBe("Jell");
  });
});
