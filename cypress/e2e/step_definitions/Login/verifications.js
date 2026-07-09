import { Elements } from '../../elements/elements';

export function verifyInventoryPage() {
  cy.url().should('include', '/inventory.html');
}

export function verifyLockedOutError() {
  cy.get(Elements.login.errorMessage)
    .should('be.visible')
    .and('contain', 'Sorry, this user has been locked out.');
}

export function verifyLoginPage() {
  cy.url().should('eq', Cypress.config('baseUrl') + '/');
  cy.get(Elements.login.loginButton).should('be.visible');
}