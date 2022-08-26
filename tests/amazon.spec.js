const { test } = require('@playwright/test');

test('test', async ({ page }) => {
  // Go to https://www.amazon.nl/
  await page.goto('https://www.amazon.nl/');
  // Click text=all
  await page.click('text=all');
  // Click [aria-label="Zoeken"]
  await page.click('[aria-label="Zoeken"]');
  // Fill [aria-label="Zoeken"]
  await page.fill('[aria-label="Zoeken"]', 'gran turismo 7');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://www.amazon.nl/s?k=gran+turismo+7&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7WJ8CWOB5W63&sprefix=gran+turismo+7%2Caps%2C80&ref=nb_sb_noss_1' } */),
    page.press('[aria-label="Zoeken"]', 'Enter'),
  ]);
  // Click [aria-label="Sony"] i
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://www.amazon.nl/s?k=gran+turismo+7&rh=n%3A16242800031%2Cp_89%3ASony&dc&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7WJ8CWOB5W63&qid=1646152097&rnid=16463267031&sprefix=gran+turismo+7%2Caps%2C80&ref=sr_nr_p_89_1' } */),
    page.click('[aria-label="Sony"] i'),
  ]);
  // Click [aria-label="Inclusief\ niet\ op\ voorraad"] i
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://www.amazon.nl/s?k=gran+turismo+7&i=videogames&rh=n%3A16242800031%2Cp_89%3ASony%2Cp_n_availability%3A16332322031&dc&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7WJ8CWOB5W63&qid=1646152138&rnid=16332311031&sprefix=gran+turismo+7%2Caps%2C80&ref=sr_nr_p_n_availability_2' } */),
    page.click('[aria-label="Inclusief\\ niet\\ op\\ voorraad"] i'),
  ]);
});
