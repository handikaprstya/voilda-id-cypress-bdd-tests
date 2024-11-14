// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginValid', (email, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(email, {delay:100});
    cy.wait(300);
    cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1').type(password);
    cy.get('._920fuu5').click();
    cy.get('[style="max-width: 158px; min-width: auto; display: flex; justify-content: left;"] > ._13pnhtu1j > ._15kd2we1f4 > a', {timeout:10000})
    .should('contain.text', 'Limited Offers');
});
Cypress.Commands.add('logoutAccount', () => {
    cy.contains('Get the ultimate shopping experience on voilà.id app')
    .scrollIntoView();
    cy.get('._3syuln4 > a > #base').click();
    cy.get('[data-test-id="CT_LogOut"] > ._1ugu32j0 > ._1ugu32j1 > ._1ccbe2wb').click();
    cy.contains('Would you like to sign out from your voilà.id account?').should('be.visible');
    cy.get('[data-test-id="CT_SignOut_Confirm"]').click();
    cy.url().should('include', '/');
})

Cypress.Commands.add('wrongPassword', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidPassword.email, {delay:100});
    cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1').type(user.invalidPassword.password);
    cy.get('._920fuu5').click();
    cy.get('._7q2fqh0 > .j1jih73h').should('have.text', 'Your account ID or password is incorrect. Please try again.');
});

Cypress.Commands.add('wrongEmail', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidEmail.email, {delay:100});
    cy.get('._920fuu5').click();
    cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
    cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
    cy.url().should('include','/account/register');
});

Cypress.Commands.add('wrongUser', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidUser.email, {delay:100});
    cy.get('._920fuu5').click();
    cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
    cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
    cy.get(':nth-child(3) > .j1jih78m > :nth-child(2) > ._15r4f4dfz').should('contain.text', 'Purchase History')
    cy.url().should('include','/account/register');
});
Cypress.Commands.add('forgotPass', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.validUser.email, {delay:100});
    cy.get('[data-test-id="CT_Link_forgotPassword"]').click()
    cy.get('._15kd2weog').should('contain.text', 'Forgot Password')
    cy.get('.ldkv8w1').type(user.validUser.email);
    cy.get('._920fuu5').click();
    cy.contains('You’re almost there');
});

Cypress.Commands.add('addToCart', () => {
    cy.get('[data-test-id="CT-Search"]').click({ force: true });
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Nike {enter}', {force:true});
    cy.wait(10000);
    cy.get('[data-test-id="CT_component_product-item_Search-Result-Item"]', {timeout:1000}).first().click({force: true});
    cy.wait(5000);
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').click();

    // cy.get('.ellipsis-one-line').click({force: true});
    // cy.get('#search-result-product-list-43656 > ._1nvnchg4', {timeout: 10000}).click();
    // cy.contains('Wishlist').scrollIntoView();
    // cy.url().should('include', 'products/air-jordan-1');
    // cy.get('._15r4f4dhd > ._920fuu5').click();

});

Cypress.Commands.add('checkout', () => {
    cy.get('[data-test-id="CT-Go-To-Cart"]').click();
    cy.get('h1 > .j1jih7a0 > #base > a').should('contain.text', 'Nike');
    cy.wait(500);
    cy.get('button').contains('Checkout').click();
    cy.wait(10000);
    cy.get('#shipping-list > ._15kd2we5s').click({force:true});
    cy.contains('Paxel').click();
    cy.contains('Confirm').click();
    cy.get('#payment-list > ._15kd2we5s').click({force:true});
    cy.contains('Virtual Account').click();
    cy.contains('BCA Virtual Account').click();
    cy.contains('Confirm Payment Method').click();
    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    cy.url().should('include', '/checkout');
    cy.get('button').contains('Check Order Status').click();
});

 export class LoginPage {
    static inputValidEmail(email) {
        cy.get('.ldkv8w1').type(email, {delay:100});
    };
    
    static inputValidPassword(password) {
        cy.wait(500);
        cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1')
        .type(password);
    };

    static inputInvalidEmail(user) {
        cy.get('.ldkv8w1').type(user.invalidEmail.email, {delay:100});
    };

    static inputInvalidPassword(user) {
        cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1')
        .type(user.invalidPassword.password);
    }

    static buttonLogin() {
        cy.get('._920fuu5').click();
    };

    static homePage() {
        cy.wait(500);
        cy.get('[style="max-width: 158px; min-width: auto; display: flex; justify-content: left;"] > ._13pnhtu1j > ._15kd2we1f4 > a', {timeout:10000})
        .should('contain.text', 'Limited Offers');
    };

    static logoutAccount() {
        cy.contains('Get the ultimate shopping experience on voilà.id app')
        .scrollIntoView();
        cy.get('._3syuln4 > a > #base').eq(0).click();
        cy.get('[data-test-id="Container_Logout"] > ._1ugu32j0 > ._1ugu32j1').click();
        cy.contains('Would you like to sign out from your voilà.id account?').should('be.visible');
        cy.get('._920fuu5 _920fuuf _920fuub _920fuu6 _920fuui').click();
        cy.get('[data-test-id="CT_SignOut_Confirm"]').click();
        cy.url().should('include', '/');
    };

    static errorMessage() {
        cy.get('._7q2fqh0 > .j1jih73h').should('have.text', 'Your account ID or password is incorrect. Please try again.');
    };

    static registerPage() {
        cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
        cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
        cy.url().should('include','/account/register');
    }
};

export class ForgotPassword {
    static inputEmail(email) {
        cy.get('.ldkv8w1').type(email, {delay:100});
    };
    
    static forgotPasswordClick() {
        cy.wait(300);
        cy.get('.j1jih79v > #base').click()
    };

    static inputValidEmail(user) {
        cy.get('._15kd2weog').should('contain.text', 'Forgot Password')
        cy.get('.ldkv8w1').type(user.validUser.email);
    };

    static buttonForgotPass() {
        cy.get('._920fuu5').click();
    };

    static emailMessage() {
        cy.contains('You’re almost there');
    };
};

export class AddToCart {
    static searchProduct() {
        cy.get('[data-test-id="CT-Search"]').click({force:true});
        cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Nike{enter}', {force: true});
    };
    
    static selectProduct() {
        cy.wait(10000);
        cy.get('[data-test-id="CT_component_product-item_Search-Result-Item"]', {timeout:1000}).first().click({force: true});
    };
    
    static addProduct() {
        cy.wait(7000);
        cy.get('[data-test-id="CT-add-to-bag-desktop"]').click();
    };
    
    static addedCart() {
        cy.get('p').contains('Try virtual try-on and see size on the app to see how the product fits you.').scrollIntoView();
        cy.get('[data-test-id="CT-Go-To-Cart"]').click();
    };
    
    static productCart() {
        cy.get('h1 > .j1jih7a0 > #base > a').should('contain.text', 'Nike');
    };
};

export class Checkout{
    static process() {
        cy.wait(500);
        cy.get('button').contains('Checkout').click();
    };
    
    static shippingMethode() {
        cy.wait(10000);
        cy.get('#shipping-list > ._15kd2we5s').click();
        cy.contains('Paxel').click();
        cy.contains('Confirm').click();
    };

    static paymentMenthod() {
        cy.get('#payment-list > ._15kd2we5s').click({force:true});
        cy.contains('Virtual Account').click();
        cy.contains('BCA Virtual Account').click();
        cy.contains('Confirm Payment Method').click();
    };

    static clickOrder() {
        cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    };

    static confirmPage() {
        cy.url().should('include', '/checkout');
        cy.get('button').contains('Check Order Status').click();
    };
};



