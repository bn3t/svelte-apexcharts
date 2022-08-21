import { expect, test } from '@playwright/test';

const ROOT_URL = './';

test.describe('Home Page', () => {
  test('Home page is displayed', async ({ page }) => {
    await page.goto(ROOT_URL);
    await expect(page).toHaveTitle('Example application for @bn3t/svelte-apexcharts');
    await expect(page.locator('h1')).toHaveText('@bn3t/svelte-apexcharts');
  });

  test('Home page can navigate to simple page', async ({ page }) => {
    await page.goto(ROOT_URL);
    await page.locator('nav a', { hasText: 'Simple Example' }).click();
    await page.waitForURL(/simple/);
  });

  test('Home page can navigate to complex page', async ({ page }) => {
    await page.goto(ROOT_URL);
    await page.locator('nav a', { hasText: 'Complex Example' }).click();
    await page.waitForURL(/complex/);
  });

  test('Home page can navigate to Github page', async ({ page }) => {
    await page.goto(ROOT_URL);
    await page.locator('nav a', { hasText: 'Github' }).click();
    await page.waitForURL('https://github.com/bn3t/svelte-apexcharts');
  });
});
