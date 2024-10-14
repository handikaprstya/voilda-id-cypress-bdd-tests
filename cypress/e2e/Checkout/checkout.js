const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
import { LoginPage, AddToCart, Checkout} from '../../support/commands';

Given('the user is on the login page', () => {
    cy.visit("/account/login")
});

When('the user log in with valid credentials', () => { 
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        LoginPage.inputValidEmail(email);
        LoginPage.inputValidPassword(password);
        LoginPage.buttonLogin();
        LoginPage.homePage();
    })
});

When('the user adds a product to the cart', () => {
    AddToCart.searchProduct();
    AddToCart.selectProduct();
    AddToCart.addProduct();
    AddToCart.addedCart();
    AddToCart.productCart();
});

When('the user proceeds to Checkout', () => {
    Checkout.process();
});

When('the user selects selects a shipping method', () => {
    Checkout.shippingMethode();
});

When('the user selects a payment method', () => {
    Checkout.paymentMenthod();
});

When('the user places the order', () => {
    Checkout.clickOrder();
});

Then('the user should see the order confirmation page', () => {
    Checkout.confirmPage();
});