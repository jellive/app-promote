import { test, expect } from '@playwright/test';

test.describe('Homepage E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Verify page loads and has content
    await expect(page).toHaveTitle(/Jell/);
  });

  test('should display main content', async ({ page }) => {
    // Check for main content area
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should be responsive on different viewports', async ({ page }) => {
    // Get viewport info from test config
    const viewportSize = page.viewportSize();

    if (viewportSize) {
      // Verify page renders at current viewport
      await expect(page.locator('body')).toBeVisible();

      // Mobile viewport check
      if (viewportSize.width <= 768) {
        // Mobile-specific checks can be added here
        await expect(page.locator('body')).toBeVisible();
      }
    }
  });

  test('should have accessible elements', async ({ page }) => {
    // Check for proper heading structure
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    // Ensure page has a main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});
