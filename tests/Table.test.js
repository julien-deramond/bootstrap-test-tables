const { test, expect } = require('@playwright/test');

test.describe('Table Component', () => {
  test('default table visual regression', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=example-table--table&args=size:default');
    const table = await page.locator('.storybook-table');
    await expect(table).toHaveScreenshot('default-table.png');
  });

  test('small table visual regression', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=example-table--table&args=size:small');
    const table = await page.locator('.storybook-table');
    await expect(table).toHaveScreenshot('small-table.png');
  });
});
