/// <reference types= "cypress" />

describe('Add to cart ', () => {
    beforeEach(() => {
        cy.visit("/account/login")
    });

    it('Add to cart product', () => {
        cy.fixture('user').then(user => {
            const email = user.validUser.email;
            const password = user.validUser.password;

            cy.loginValid(email, password);
            cy.addToCart(); 
        });
    });
});