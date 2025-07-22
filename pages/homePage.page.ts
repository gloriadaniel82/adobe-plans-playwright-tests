import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly seeAllPlansLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.seeAllPlansLink = page.getByRole('link', { name: 'See all plans' });
  }

  async navigate() {
    await this.page.goto('https://www.adobe.com/', { waitUntil: 'domcontentloaded' });
  }

  async clickSeeAllPlans() {
    await this.seeAllPlansLink.click();
  }
}