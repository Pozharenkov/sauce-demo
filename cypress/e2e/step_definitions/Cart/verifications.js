import { Elements } from '../../elements/elements';

export function verifyCartBadge(count) {
  cy.get(Elements.inventory.cartBadge).should('have.text', count);
}

export function verifyRemoveButtonVisible(productName) {
  cy.get(Elements.cart.removeButtons[productName]).should('be.visible');
}

export function verifyOnesieImage() {
  cy.get(Elements.inventory.onesieImage)
    .should('have.attr', 'src', '/assets/red-onesie-1200x1500-BrSuq0ic.jpg');
}