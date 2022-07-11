import { expect, test } from '@playwright/test';

const ROOT_URL = '/svelte-apexcharts/complex';

test.describe('Chart Manipulation', () => {
  test('A chart is displayed', async ({ page }) => {
    await page.goto(ROOT_URL);
    const chart = page.locator('#apexchartschart1');
    await expect(chart).toBeVisible();
  });

  test('Chart can toggled visible', async ({ page }) => {
    await page.goto(ROOT_URL);

    await page.locator('button', { hasText: 'Toggle chart visibility' }).click();

    let chart = page.locator('#apexchartschart1');

    await expect(chart).not.toBeVisible();

    await page.locator('button', { hasText: 'Toggle chart visibility' }).click();

    chart = page.locator('#apexchartschart1');
    await expect(chart).toBeVisible();
  });
});
