export const Elements = {
    login: {
        usernameInput: '[data-test="username"]',
        passwordInput: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessage: '[data-test="error"]',
    },
    inventory: {
        cartBadge: '[data-test="shopping-cart-badge"]',
        cartIcon: '[data-test="shopping-cart-icon"]',

        addToCartButtons: {
            'Sauce Labs Backpack': '[data-test="add-to-cart-sauce-labs-backpack"]',
            'Sauce Labs Fleece Jacket': '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        },

        onesieImage: '[data-test="inventory-item-sauce-labs-onesie-img"]',
    },
    cart: {
        removeButtons: {
            'Sauce Labs Backpack': '[data-test="remove-sauce-labs-backpack"]',
        },
    },
};