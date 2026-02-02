/**
 * @fileoverview Tests for Robots.txt Configuration
 * TDD: Validate Next.js robots.txt generation
 */

import robots from "@/app/robots";

describe("Robots.txt Generation", () => {
  let robotsResult: ReturnType<typeof robots>;

  beforeAll(() => {
    robotsResult = robots();
  });

  describe("Rules Configuration", () => {
    it("should have rules defined", () => {
      expect(robotsResult.rules).toBeDefined();
      expect(Array.isArray(robotsResult.rules)).toBe(true);
    });

    it("should have wildcard user agent rule", () => {
      const rules = Array.isArray(robotsResult.rules)
        ? robotsResult.rules
        : [robotsResult.rules];
      const wildcardRule = rules.find((rule) => rule.userAgent === "*");
      expect(wildcardRule).toBeDefined();
    });

    it("should have Googlebot specific rule", () => {
      const rules = Array.isArray(robotsResult.rules)
        ? robotsResult.rules
        : [robotsResult.rules];
      const googlebotRule = rules.find(
        (rule) => rule.userAgent === "Googlebot",
      );
      expect(googlebotRule).toBeDefined();
    });

    it("should allow root path", () => {
      const rules = Array.isArray(robotsResult.rules)
        ? robotsResult.rules
        : [robotsResult.rules];
      const wildcardRule = rules.find((rule) => rule.userAgent === "*");
      expect(wildcardRule?.allow).toBe("/");
    });

    it("should disallow api routes", () => {
      const rules = Array.isArray(robotsResult.rules)
        ? robotsResult.rules
        : [robotsResult.rules];
      const wildcardRule = rules.find((rule) => rule.userAgent === "*");
      expect(wildcardRule?.disallow).toContain("/api/");
    });

    it("should disallow admin routes", () => {
      const rules = Array.isArray(robotsResult.rules)
        ? robotsResult.rules
        : [robotsResult.rules];
      const wildcardRule = rules.find((rule) => rule.userAgent === "*");
      expect(wildcardRule?.disallow).toContain("/admin/");
    });
  });

  describe("Sitemap Reference", () => {
    it("should reference sitemap.xml", () => {
      expect(robotsResult.sitemap).toBe("https://jell.kr/sitemap.xml");
    });
  });

  describe("Host Configuration", () => {
    it("should have host defined", () => {
      expect(robotsResult.host).toBe("https://jell.kr");
    });
  });

  describe("URL Format", () => {
    it("should use HTTPS protocol", () => {
      expect(robotsResult.sitemap).toMatch(/^https:\/\//);
      expect(robotsResult.host).toMatch(/^https:\/\//);
    });

    it("should use correct domain", () => {
      expect(robotsResult.sitemap).toContain("jell.kr");
      expect(robotsResult.host).toContain("jell.kr");
    });
  });
});
