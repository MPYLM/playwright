const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.bol.com/nl/nl/
  await page.goto('https://www.bol.com/nl/nl/');

  // Click [data-test="consent-modal-confirm-btn"]
  await page.click('[data-test="consent-modal-confirm-btn"]');

  // Click [data-test="search_input_trigger"]
  await page.click('[data-test="search_input_trigger"]');

  // Fill [data-test="search_input_trigger"]
  await page.fill('[data-test="search_input_trigger"]', 'mondkapjes');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bol.com/nl/nl/s/?searchtext=mondkapjes' }*/),
    page.press('[data-test="search_input_trigger"]', 'Enter')
  ]);

  // Go to https://www.bol.com/nl/nl/s/?searchtext=mondkapjes#modal_open
  await page.goto('https://www.bol.com/nl/nl/s/?searchtext=mondkapjes#modal_open');

  // Go to https://www.bol.com/nl/nl/s/?searchtext=mondkapjes
  await page.goto('https://www.bol.com/nl/nl/s/?searchtext=mondkapjes');

  // Go to https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4284186882+4282619856+4296450029&rating=all
  await page.goto('https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4284186882+4282619856+4296450029&rating=all');

  // Go to https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882+4282619856+4296450029&rating=all
  await page.goto('https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882+4282619856+4296450029&rating=all');

  // Go to https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882+4282619856&rating=all
  await page.goto('https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882+4282619856&rating=all');

  // Go to https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882&rating=all
  await page.goto('https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091+4284186882&rating=all');

  // Go to https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091&rating=all
  await page.goto('https://www.bol.com/nl/nl/s/?page=1&searchtext=mondkapjes&view=list&filter_N=4286146091&rating=all');

  // Go to https://www.bol.com/nl/nl/p/adidas-mondkapje-3-pack-junior-senior-zwart-maat-m-l/9300000013623354/
  await page.goto('https://www.bol.com/nl/nl/p/adidas-mondkapje-3-pack-junior-senior-zwart-maat-m-l/9300000013623354/');

  // Click [data-test="default-buy-block"] >> :nth-match([data-test="add-to-basket"], 2)
  await page.click('[data-test="default-buy-block"] >> :nth-match([data-test="add-to-basket"], 2)');
  // assert.equal(page.url(), 'https://www.bol.com/nl/nl/p/adidas-mondkapje-3-pack-junior-senior-zwart-maat-m-l/9300000013623354/#modal_open');

  // Click [data-test="modal-window-close"]
  await page.click('[data-test="modal-window-close"]');
  // assert.equal(page.url(), 'https://www.bol.com/nl/nl/p/adidas-mondkapje-3-pack-junior-senior-zwart-maat-m-l/9300000013623354/');

  // Click [data-test="icon-basket"]
  await page.click('[data-test="icon-basket"]');
  // assert.equal(page.url(), 'https://www.bol.com/nl/order/basket.html');

  // Click [data-test="remove-link-large"]
  await page.click('[data-test="remove-link-large"]');
  // assert.equal(page.url(), 'https://www.bol.com/nl/order/basket.html');

  // Click [data-test="main-logo"] use
  await page.click('[data-test="main-logo"] use');
  // assert.equal(page.url(), 'https://www.bol.com/nl/nl/');

});