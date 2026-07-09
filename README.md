# Saucedemo - Cypress + Cucumber tests

Automated tests for https://www.saucedemo.com using Cypress, Cucumber (Gherkin) and JavaScript

## Test scenarios
001 - Login as standard user and verify URL
002 - Login as standard user, add item to cart and verify
003 - Login as problem user and check onesie image
004 - Login as locked user and verify error
005 - Login as error user and add fleece jacket
006 - Login and logout as different users

## Notes
- Credentials are gitignored and never committed
- Copy cypress/fixtures/users.json.example to cypress/fixtures/users.json and fill in the credentials
