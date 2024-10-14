/// <reference types = "cypress" />

describe('Forgot Password with valid email', () => {
    beforeEach(() => {
        cy.visit("/account/login");
    });

    it('Forgot password with valid credentials', () => {
        cy.fixture('user').then(user => {
            cy.forgotPass(user)
        })
    });

});