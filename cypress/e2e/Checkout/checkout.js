const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
import { LoginPage, AddToCart, Checkout} from '../../support/commands';

// Attempt to checkout without logging in
Given('I have added a product to my cart', () => {
    cy.visit('/')
    // cy.removePopUp()
    cy.clickProduct()
});

When("I go to the cart page", () => {
    cy.detailProduct()
});

When('I click on the "Checkout" button', () => {
    cy.processCheckout()
}); 

Then('I should be redirected to the login page', () => {
    cy.loginPages()
});

// Checkout with missing required fields
Given('the user is on the login page', () => {
    cy.visit("/account/login")
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        cy.loginValid(email, password)
    })
});

Given('I have at least one product in my cart', () => {
    cy.clickProduct()
});

When('I leave some required fields empty "address or phone number"', () => {
    cy.selectAddress()
});

When('I click the "Place Order" button', () => {
    cy.submitAddress()
});

Then('I should see validation error messages for the missing fields', () => {
    cy.missingField()
});

// Cancel the checkout process
When('I click the "Delete" button', () => {
    cy.deleteCart()
});

Then('I should see a message "1 product has been removed."', () => {
    cy.validateRemoveCart()
});

// Apply an invalid promo code during checkout
When('I enter an invalid promo code', () => {
    cy.clickVoucher()
});

Then('I should see a message "Invalid promo code"', () => {
    cy.invalidPromo()
});

// I click on the "Checkout" button
When("I do not select any payment method", () => {
    cy.invalidPaymentMethod()
});

Then('I should see a message "Please select a payment method"', () => {
    cy.validationPayment()
});

// Successful checkout process
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

When('the user selects a shipping method', () => {
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
