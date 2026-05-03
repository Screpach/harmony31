import { test, expect } from '@playwright/test';

test('main regions are visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('region-header')).toBeVisible();
  await expect(page.getByTestId('region-notation')).toBeVisible();
  await expect(page.getByTestId('region-inspector')).toBeVisible();
  await expect(page.getByTestId('region-keyboard')).toBeVisible();
  await expect(page.getByTestId('region-transport')).toBeVisible();
});
