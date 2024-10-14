const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
import { LoginPage, AddToCart } from '../../support/commands';

Given('the user is on the login page', () => {
    cy.visit('/account/login')
});

When('the user log in with valid credentials', () => {
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        LoginPage.inputValidEmail(email);
        LoginPage.inputValidPassword(password);
        LoginPage.buttonLogin();
        LoginPage.homePage();
    });
});

When('the user searches for a product', () => {
    AddToCart.searchProduct();
});

When('the user selects the first product from the search results', () => {
    AddToCart.selectProduct();
});

When('the user adds the product to the cart', () => {
    AddToCart.addProduct();
});

Then('the product should be added to the cart successfully', () => {
    AddToCart.addedCart();
});

Then('the user should see the product in the cart', () => {
    AddToCart.productCart();
});