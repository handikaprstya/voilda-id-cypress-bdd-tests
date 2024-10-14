/// <reference types="cypress" />


describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("/account/login")
    });

    it('Login with valid credentials', () => {
        cy.fixture('user').then(user => {
            const email = user.validUser.email
            const password = user.validUser.password
            cy.loginValid(email, password);

            cy.logoutAccount()
        });
    });

    it('Login with invalid password', () => {
        cy.fixture('user').then(user => {
            cy.wrongPassword(user)
        });
    });

    it('Login with invalid email', () => {
        cy.fixture('user').then(user => {
            cy.wrongEmail(user)
        });
    });

    it('Login with invalid email and password', () => {
        cy.fixture('user').then(user => {
            cy.wrongUser(user)
        });
    });
});