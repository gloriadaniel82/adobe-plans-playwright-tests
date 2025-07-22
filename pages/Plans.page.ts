import { Page, Locator, expect } from '@playwright/test';

export class PlansPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly tabLabels = ['Individuals', 'Business', 'Students & Teachers', 'Schools & Universities'];

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1'); 
  }

  async verifyHeadingText(expectedText: string) {
    await expect(this.heading).toHaveText(expectedText);
  }

  async clickEachTab() {
    for (const tabName of this.tabLabels) {
      const tab = this.page.getByRole('tab', { name: tabName });
      await expect(tab).toBeVisible();
      await tab.click();
    }
  }
}