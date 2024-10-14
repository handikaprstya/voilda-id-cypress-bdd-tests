/// <reference types="cypress" />

describe('Checkout', () => {
    beforeEach(() => {
        cy.visit("/account/login")
    });

    it('Checkout the products', () => {
        cy.fixture('user').then(user => {
            const email = user.validUser.email;
            const password = user.validUser.password;

            cy.loginValid(email, password);
            cy.addToCart();
            cy.checkout();
        });
    });
});