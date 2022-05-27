const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  
  // Go to https://www.coolblue.nl/
  await page.goto('https://www.coolblue.nl/');
  
  // Click text=Oké
  await page.locator('text=Oké').click();
  await expect(page).toHaveURL('https://www.coolblue.nl/');
  
  // Click [placeholder="Zoeken\ naar\.\.\."]
  await page.locator('[placeholder="Zoeken\\ naar\\.\\.\\."]').click();
  
  // Fill [placeholder="Zoeken\ naar\.\.\."]
  await page.locator('[placeholder="Zoeken\\ naar\\.\\.\\."]').fill('Playstation 5');
  
  // Click [aria-label="Zoeken"]
  await page.locator('[aria-label="Zoeken"]').click();
  await expect(page).toHaveURL('https://www.coolblue.nl/consoles/playstation5?redirect=playstation+5');
  
  // Click text=PlayStation 5 Digital Edition >> nth=1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.coolblue.nl/product/865867/playstation-5-digital-edition.html' }*/),
    page.locator('text=PlayStation 5 Digital Edition').nth(1).click()
  ]);
  
  // Click text=Tijdelijk uitverkocht >> nth=2
  await page.locator('text=Tijdelijk uitverkocht').nth(2).click();
});