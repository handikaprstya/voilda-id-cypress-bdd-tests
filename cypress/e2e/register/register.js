const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
const { LoginPage } = require('../../support/commands');

// Register with an already registered email
Given("I am on the registration page", () => {
    cy.visit('/account/register')
});

When("I Input email with registered email", () => {
    cy.fixture("user").then(user => {
        const email = user.validUser.email

    cy.registerEmail(email)
    })
});

When("I input password with valid password", () => {
    cy.fixture("user").then(user => {
        const password = user.validUser.password

        cy.registerPass(password)
    });
});

When('I click the "Register Account" button', () => {
    cy.buttonRegister()
});

Then('I directed to login page', () => {
    cy.loginPages()
});

// Register by filling in the spaces for email and password
When('I input space in all fields', () => {
    cy.spaceFields()
});

Then('I should see error messages "Please enter a valid email format or phone number." "Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers." for all fields', () => {
    cy.spaceFieldResults()
});

// Register without filling all fields
When('I leave all fields blank', () => {
    cy.blankField()
});

Then('I should see error messages "Field cannot be empty!" for all fields', () => {
    cy.blankFieldResults()
});

// Register with invalid email format
When('I fill "Email" with invalid email', () => {
    cy.registerEmailInvalid()
});

When('I fill "Password" with valid password', () => {
    cy.registerPassvalid()
});

Then('I should see an error message "Please enter a valid email format or phone number."', () => {
    cy.invalidEmailResults()
});

// Register with invalid password format

When('I fill "Email" with valid email', () => {
    cy.registerEmailValid()
});

When('I fill "Password" with invalid password', () => {
    cy.registerPassInvalid()
});

Then('I should see an error message "Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers."', () => {
    cy.invalidPassResults()
});

// Register with a Phone number more than 12 numbers
When('I fill "Email or Phone Number" with more than 12 numbers', () => {
    cy.invalidPhoneNumber()
});

// Register with a Phone number less than 9 numbers
When('I fill "Email or Phone Number" with less than 12 numbers', () => {
    cy.lessPhoneNumber()
});