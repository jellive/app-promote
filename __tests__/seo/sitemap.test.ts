/**
 * @fileoverview Tests for Sitemap Configuration
 * TDD: Validate Next.js sitemap generation
 */

import sitemap from "@/app/sitemap";
import { projectsData } from "@/data/projects";

describe("Sitemap Generation", () => {
  let sitemapResult: ReturnType<typeof sitemap>;

  beforeAll(() => {
    sitemapResult = sitemap();
  });

  describe("Static Pages", () => {
    it("should include home page", () => {
      const homePage = sitemapResult.find(
        (entry) => entry.url === "https://app.jell.kr",
      );
      expect(homePage).toBeDefined();
      expect(homePage?.priority).toBe(1.0);
    });

    it("should include privacy page", () => {
      const privacyPage = sitemapResult.find((entry) =>
        entry.url.includes("/privacy"),
      );
      expect(privacyPage).toBeDefined();
      expect(privacyPage?.priority).toBe(0.3);
    });

    it("should have lastModified date on static pages", () => {
      const homePage = sitemapResult.find(
        (entry) => entry.url === "https://app.jell.kr",
      );
      expect(homePage?.lastModified).toBeInstanceOf(Date);
    });
  });

  describe("Project Pages", () => {
    it("should include all 29 projects", () => {
      const projectEntries = sitemapResult.filter((entry) =>
        entry.url.includes("/projects/"),
      );
      expect(projectEntries).toHaveLength(29);
    });

    it("should include cookting project", () => {
      const cooktingPage = sitemapResult.find((entry) =>
        entry.url.includes("/projects/cookting"),
      );
      expect(cooktingPage).toBeDefined();
      expect(cooktingPage?.url).toBe("https://app.jell.kr/projects/cookting");
    });

    it("should include dev-utils-hub project", () => {
      const devUtilsPage = sitemapResult.find((entry) =>
        entry.url.includes("/projects/dev-utils-hub"),
      );
      expect(devUtilsPage).toBeDefined();
    });

    it("should have correct priority for project pages", () => {
      const projectPages = sitemapResult.filter((entry) =>
        entry.url.includes("/projects/"),
      );
      projectPages.forEach((page) => {
        expect(page.priority).toBe(0.8);
      });
    });

    it("should have monthly change frequency for projects", () => {
      const projectPages = sitemapResult.filter((entry) =>
        entry.url.includes("/projects/"),
      );
      projectPages.forEach((page) => {
        expect(page.changeFrequency).toBe("monthly");
      });
    });

    it("should include all project IDs from projectsData", () => {
      const projectIds = projectsData.map((p) => p.id);
      projectIds.forEach((id) => {
        const projectPage = sitemapResult.find((entry) =>
          entry.url.includes(`/projects/${id}`),
        );
        expect(projectPage).toBeDefined();
      });
    });
  });

  describe("URL Format", () => {
    it("should use correct base URL", () => {
      sitemapResult.forEach((entry) => {
        expect(entry.url).toMatch(/^https:\/\/app\.jell\.kr/);
      });
    });

    it("should not have trailing slashes", () => {
      sitemapResult.forEach((entry) => {
        if (entry.url !== "https://app.jell.kr") {
          expect(entry.url).not.toMatch(/\/$/);
        }
      });
    });
  });

  describe("Total Entries", () => {
    it("should have correct total count (2 static + 29 projects)", () => {
      expect(sitemapResult).toHaveLength(31);
    });
  });
});
