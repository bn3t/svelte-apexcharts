import { expect, test } from '@playwright/test';

const ROOT_URL = './simple';

test.describe('Chart Display - simple', () => {
  test('A chart is displayed', async ({ page }) => {
    await page.goto(ROOT_URL);
    const chart = page.locator('#apexchartsapexchart-example');
    await expect(chart).toBeVisible();
  });
});
