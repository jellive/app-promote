import { test, expect } from "@playwright/test";
import { projectsData } from "../data/projects";

test.describe("Project Detail Pages — smoke", () => {
  for (const project of projectsData) {
    test(`renders /projects/${project.id}`, async ({ page }) => {
      const response = await page.goto(`/projects/${project.id}`);
      expect(response?.status()).toBeLessThan(400);

      const heading = page.locator("h1").first();
      await expect(heading).toBeVisible();

      await expect(page.locator("body")).toContainText(project.name);
    });
  }
});

test.describe("New 2026-04 projects — link integrity", () => {
  const newIds = [
    "abroad-crawler",
    "jellhub",
    "threat-crawler",
    "hanwha-score",
  ];

  for (const id of newIds) {
    test(`${id} has at least one external link`, async ({ page }) => {
      await page.goto(`/projects/${id}`);
      const externalLinks = page.locator(
        'a[href^="https://github.com"], a[href^="https://hub.jell"], a[href^="https://threat.jell"]',
      );
      await expect(externalLinks.first()).toBeVisible();
    });
  }
});
