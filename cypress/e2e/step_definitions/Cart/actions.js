import { Elements } from '../../elements/elements';

export function addToCart(productName) {
  cy.get(Elements.inventory.addToCartButtons[productName]).click();
}