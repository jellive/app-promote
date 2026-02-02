import { test } from "@playwright/test";

test("check Jell text in dark mode", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Set dark mode
  await page.emulateMedia({ colorScheme: "dark" });
  await page.waitForTimeout(500);

  // Take screenshot
  await page.screenshot({ path: "dark-mode-hero.png", fullPage: false });

  console.log("Screenshot saved to dark-mode-hero.png");
});
