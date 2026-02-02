/**
 * @fileoverview Tests for Image Optimization Configuration
 * TDD: Validate Next.js image optimization settings
 */

import fs from "fs";
import path from "path";

describe("Image Optimization Configuration", () => {
  let configContent: string;

  beforeAll(() => {
    const configPath = path.join(process.cwd(), "next.config.mjs");
    configContent = fs.readFileSync(configPath, "utf-8");
  });

  describe("Image Formats", () => {
    it("should enable WebP format", () => {
      expect(configContent).toContain('"image/webp"');
    });

    it("should enable AVIF format", () => {
      expect(configContent).toContain('"image/avif"');
    });

    it("should have formats array configured", () => {
      expect(configContent).toContain("formats:");
    });
  });

  describe("Responsive Breakpoints", () => {
    it("should have device sizes configured", () => {
      expect(configContent).toContain("deviceSizes:");
    });

    it("should include mobile viewport (640)", () => {
      expect(configContent).toMatch(/640/);
    });

    it("should include desktop viewport (1080)", () => {
      expect(configContent).toMatch(/1080/);
    });

    it("should include large desktop viewport (1920)", () => {
      expect(configContent).toMatch(/1920/);
    });

    it("should have image sizes for smaller images", () => {
      expect(configContent).toContain("imageSizes:");
    });
  });

  describe("Caching", () => {
    it("should have minimum cache TTL configured", () => {
      expect(configContent).toContain("minimumCacheTTL:");
    });
  });

  describe("Security", () => {
    it("should have content security policy", () => {
      expect(configContent).toContain("contentSecurityPolicy");
    });
  });
});

// TODO: Enable these tests when screenshot images are added to the project
describe.skip("Image Directory Structure (Future Feature)", () => {
  const projectIds = [
    "cookting",
    "dev-utils-hub",
    "cert-sync-manager",
    "chzzk-obs",
    "namuwiki-linker",
    "jellmodoro",
    "wecanner",
    "jell-utils",
  ];

  it("should have screenshots directory", () => {
    const screenshotsPath = path.join(process.cwd(), "public", "screenshots");
    expect(fs.existsSync(screenshotsPath)).toBe(true);
  });

  it("should have tech-icons directory", () => {
    const techIconsPath = path.join(process.cwd(), "public", "tech-icons");
    expect(fs.existsSync(techIconsPath)).toBe(true);
  });

  projectIds.forEach((projectId) => {
    it(`should have directory for ${projectId}`, () => {
      const projectPath = path.join(
        process.cwd(),
        "public",
        "screenshots",
        projectId,
      );
      expect(fs.existsSync(projectPath)).toBe(true);
    });
  });
});
