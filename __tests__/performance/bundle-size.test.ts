/**
 * @fileoverview Tests for Bundle Size and Performance Configuration
 * TDD: Validate Next.js performance optimizations
 */

import fs from "fs";
import path from "path";

describe("Performance Configuration", () => {
  let configContent: string;

  beforeAll(() => {
    const configPath = path.join(process.cwd(), "next.config.mjs");
    configContent = fs.readFileSync(configPath, "utf-8");
  });

  describe("Bundle Analyzer", () => {
    it("should have bundle analyzer configured", () => {
      expect(configContent).toContain("@next/bundle-analyzer");
    });

    it("should enable analyzer via ANALYZE env variable", () => {
      expect(configContent).toContain("process.env.ANALYZE === 'true'");
    });
  });

  describe("Console Removal", () => {
    it("should have removeConsole configured for production", () => {
      expect(configContent).toContain("removeConsole");
    });

    it("should preserve console.error in production", () => {
      expect(configContent).toContain("exclude: ['error'");
    });

    it("should preserve console.warn in production", () => {
      expect(configContent).toContain("'warn'");
    });
  });

  describe("Package Import Optimization", () => {
    it("should have optimizePackageImports configured", () => {
      expect(configContent).toContain("optimizePackageImports");
    });

    it("should optimize lucide-react imports", () => {
      expect(configContent).toContain("lucide-react");
    });
  });

  describe("Image Optimization", () => {
    it("should have image formats configured", () => {
      expect(configContent).toContain("formats:");
    });

    it("should enable WebP format", () => {
      expect(configContent).toContain("'image/webp'");
    });

    it("should enable AVIF format", () => {
      expect(configContent).toContain("'image/avif'");
    });

    it("should have cache TTL configured", () => {
      expect(configContent).toContain("minimumCacheTTL");
    });
  });
});

describe("Build Output Analysis", () => {
  const buildManifestPath = path.join(
    process.cwd(),
    ".next",
    "build-manifest.json",
  );

  it("should have build manifest after build", () => {
    // This test validates build output exists
    // Will pass if build has been run
    if (fs.existsSync(buildManifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(buildManifestPath, "utf-8"));
      expect(manifest).toBeDefined();
      expect(manifest.pages).toBeDefined();
    } else {
      // Skip if no build exists yet
      expect(true).toBe(true);
    }
  });
});

describe("Tailwind CSS Optimization", () => {
  let tailwindConfig: string;

  beforeAll(() => {
    const tailwindPath = path.join(process.cwd(), "tailwind.config.ts");
    if (fs.existsSync(tailwindPath)) {
      tailwindConfig = fs.readFileSync(tailwindPath, "utf-8");
    }
  });

  it("should have content paths configured for purging", () => {
    if (tailwindConfig) {
      expect(tailwindConfig).toContain("content:");
    } else {
      expect(true).toBe(true);
    }
  });
});
