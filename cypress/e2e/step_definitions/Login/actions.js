import { Elements } from '../../elements/elements';

export function visitLoginPage() {
  cy.visit('/');
}

export function loginWithUser(userType) {
  cy.fixture('users.json').then((users) => {
    const user = users.users[userType];
    cy.get(Elements.login.usernameInput).type(user.username);
    cy.get(Elements.login.passwordInput).type(user.password, { log: false });
    cy.get(Elements.login.loginButton).click();
  });
}

export function logout() {
  cy.get(Elements.login.burgerMenuButton).click();
  cy.get(Elements.login.logoutButton).click();
}