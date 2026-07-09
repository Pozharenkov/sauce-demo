import { Elements } from '../../elements/elements';

export function visitLoginPage() {
  cy.visit('/');
}

export function loginWithUser(userType) {
  cy.fixture('users.json').then((users) => {
    const user = users.users[userType];
    cy.get(Elements.login.usernameInput).type(user.username);
    cy.get(Elements.login.passwordInput).type(user.password);
    cy.get(Elements.login.loginButton).click();
  });
}