const { test, expect } = require('@playwright/test');
import { sizes, tableColors } from '../stories/Table.const';

test.describe('Table Component', () => {
  for (const size of sizes) {
    for (const tableColor of tableColors) {
      test(`size: ${size}, tableColor: ${tableColor}`, async ({ page }) => {
        await page.goto(`http://localhost:6006/iframe.html?id=example-table--table&args=size:${size};tableColor:${tableColor}`);
        const table = await page.locator('.storybook-table');
        await expect(table).toHaveScreenshot(`${size}-${tableColor}-table.png`);
      });
    }
  }
});
