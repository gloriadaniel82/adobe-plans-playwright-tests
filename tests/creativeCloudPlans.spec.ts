import { test, expect } from '@playwright/test';


test('should load Adobe Creative Cloud plans page', async ({ page }) => {
  await page.goto('https://www.adobe.com/creativecloud/plans.html', {
    waitUntil: 'domcontentloaded'
  });
  await expect(page).toHaveTitle(/Creative Cloud/);
});