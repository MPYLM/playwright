Run all tests

`npx playwright test`

Run a single test file

`npx playwright test tests/bol.spec.js`

Record a test

`npx playwright codegen`

HTML reporter
HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

`npx playwright test --reporter=html`

To open last HTML report run:

`npx playwright show-report`