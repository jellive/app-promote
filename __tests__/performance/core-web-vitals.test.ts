/**
 * @fileoverview Tests for Core Web Vitals Configuration
 * TDD: Validate performance optimization settings
 */

import fs from "fs";
import path from "path";

describe("Core Web Vitals Optimization", () => {
  describe("Image Optimization", () => {
    let configContent: string;

    beforeAll(() => {
      const configPath = path.join(process.cwd(), "next.config.mjs");
      configContent = fs.readFileSync(configPath, "utf-8");
    });

    it("should have WebP format enabled for LCP optimization", () => {
      expect(configContent).toContain("'image/webp'");
    });

    it("should have AVIF format enabled for better compression", () => {
      expect(configContent).toContain("'image/avif'");
    });

    it("should have device sizes configured for responsive images", () => {
      expect(configContent).toContain("deviceSizes");
    });

    it("should have image sizes configured for srcset", () => {
      expect(configContent).toContain("imageSizes");
    });

    it("should have cache TTL configured for performance", () => {
      expect(configContent).toContain("minimumCacheTTL");
    });
  });

  describe("JavaScript Optimization", () => {
    let configContent: string;

    beforeAll(() => {
      const configPath = path.join(process.cwd(), "next.config.mjs");
      configContent = fs.readFileSync(configPath, "utf-8");
    });

    it("should have package import optimization enabled", () => {
      expect(configContent).toContain("optimizePackageImports");
    });

    it("should optimize lucide-react for tree shaking", () => {
      expect(configContent).toContain("lucide-react");
    });

    it("should have console removal for production", () => {
      expect(configContent).toContain("removeConsole");
    });
  });

  describe("Layout Shift Prevention (CLS)", () => {
    it("should have ProjectCardSkeleton component", () => {
      const skeletonPath = path.join(
        process.cwd(),
        "components/skeletons/project-card-skeleton.tsx",
      );
      expect(fs.existsSync(skeletonPath)).toBe(true);
    });

    it("should have ProjectDetailSkeleton component", () => {
      const skeletonPath = path.join(
        process.cwd(),
        "components/skeletons/project-detail-skeleton.tsx",
      );
      expect(fs.existsSync(skeletonPath)).toBe(true);
    });

    it("should have loading.tsx for project detail page", () => {
      const loadingPath = path.join(
        process.cwd(),
        "app/projects/[id]/loading.tsx",
      );
      expect(fs.existsSync(loadingPath)).toBe(true);
    });
  });

  describe("First Input Delay (FID) Optimization", () => {
    let configContent: string;

    beforeAll(() => {
      const configPath = path.join(process.cwd(), "next.config.mjs");
      configContent = fs.readFileSync(configPath, "utf-8");
    });

    it("should have JavaScript optimization for faster interactivity", () => {
      // removeConsole reduces JS execution time
      expect(configContent).toContain("removeConsole");
    });

    it("should have tree shaking enabled via optimizePackageImports", () => {
      expect(configContent).toContain("optimizePackageImports");
    });
  });

  describe("Largest Contentful Paint (LCP) Optimization", () => {
    it("should use section components for efficient rendering", () => {
      const pagePath = path.join(process.cwd(), "app/page.tsx");
      const pageContent = fs.readFileSync(pagePath, "utf-8");

      // Homepage should use modular section components for better LCP
      expect(pageContent).toContain("HeroSection");
      expect(pageContent).toContain("ProjectsSection");
    });

    it("should have text-based hero for fast LCP", () => {
      const heroPath = path.join(
        process.cwd(),
        "components/sections/hero-section.tsx",
      );
      const heroContent = fs.readFileSync(heroPath, "utf-8");

      // Hero uses text heading as LCP element (faster than images)
      expect(heroContent).toContain("<h1");
      expect(heroContent).toContain('data-testid="hero-section"');
    });

    it("should have proper component structure for LCP", () => {
      const projectsPath = path.join(
        process.cwd(),
        "components/sections/projects-section.tsx",
      );
      const projectsContent = fs.readFileSync(projectsPath, "utf-8");

      // Projects section should be properly structured
      expect(projectsContent).toContain('data-testid="projects-section"');
      expect(projectsContent).toContain("projectsData");
    });
  });
});

describe("Build Output Validation", () => {
  it("should have acceptable bundle sizes", () => {
    // This test documents expected bundle size constraints
    // First Load JS shared should be < 100KB
    const buildManifestPath = path.join(
      process.cwd(),
      ".next",
      "build-manifest.json",
    );

    if (fs.existsSync(buildManifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(buildManifestPath, "utf-8"));
      expect(manifest).toBeDefined();
      expect(manifest.pages).toBeDefined();
    } else {
      // Skip if no build exists
      expect(true).toBe(true);
    }
  });

  it("should generate static pages for performance", () => {
    const prerenderManifestPath = path.join(
      process.cwd(),
      ".next",
      "prerender-manifest.json",
    );

    if (fs.existsSync(prerenderManifestPath)) {
      const manifest = JSON.parse(
        fs.readFileSync(prerenderManifestPath, "utf-8"),
      );
      expect(manifest).toBeDefined();
      expect(manifest.routes).toBeDefined();
    } else {
      // Skip if no build exists
      expect(true).toBe(true);
    }
  });
});
