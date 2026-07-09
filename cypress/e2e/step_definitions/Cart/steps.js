import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as actions from './actions';
import * as verifications from './verifications';
import * as loginActions from '../Login/actions';

Cypress.on('uncaught:exception', (error) => {
  if (error.message.includes('Failed to add item to the cart')) {
    return false;
  }
});

Given('I am logged in as a {string} user', (userType) => {
  loginActions.loginWithUser(userType);
});

When('I add {string} to the cart', (productName) => {
  actions.addToCart(productName);
});

Then('The cart badge should show {string}', (count) => {
  verifications.verifyCartBadge(count);
});

Then('The remove button should be visible for {string}', (productName) => {
  verifications.verifyRemoveButtonVisible(productName);
});

Then('The image for {string} should match the expected onesie image', (productName) => {
  verifications.verifyOnesieImage();
});