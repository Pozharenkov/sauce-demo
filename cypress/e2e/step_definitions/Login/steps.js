import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as actions from './actions';
import * as verifications from './verifications';

Given('I am on the login page', () => {
  actions.visitLoginPage();
});

When('I login with a {string} user', (userType) => {
  actions.loginWithUser(userType);
});

Then('I should be redirected to the inventory page', () => {
  verifications.verifyInventoryPage();
});

Then('I should see a locked out error message', () => {
  verifications.verifyLockedOutError();
});

When('I log out', () => {
  actions.logout();
});

Then('I should be back on the login page', () => {
  verifications.verifyLoginPage();
});