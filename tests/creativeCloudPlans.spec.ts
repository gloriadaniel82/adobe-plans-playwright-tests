import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.page'; 
import { PlansPage } from '../pages/Plans.page'; 

test.describe('Adobe Creative Cloud Navigation and Plans Tabs', () => {
  test('User can navigate from home to plans and interact with tabs', async ({ page }) => {
    const homePage = new HomePage(page);
    const plansPage = new PlansPage(page);

    await homePage.navigate();
    await homePage.clickSeeAllPlans();
    await expect(page).toHaveURL(/.*creativecloud\/plans\.html/);

    await plansPage.verifyHeadingText('Plans and pricing for Creative Cloud apps and more.');
    await plansPage.clickEachTab();
  });
});