const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
import { ForgotPassword } from '../../support/commands';


Given('the user is on the login page', () => {
    cy.visit("/account/login")
});

When('the user enters a valid email', () => {
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        ForgotPassword.inputEmail(email)
    });
});

When('I clicked the forgot password', () => {
    ForgotPassword.forgotPasswordClick()
});

When('I input a valid email', () => {
    cy.fixture("user").then(user => {
        ForgotPassword.inputValidEmail(user)
    });
});

When('I clicked forgot password button', () => {
    ForgotPassword.buttonForgotPass()
});

Then('a message came to my email', () => {
    ForgotPassword.emailMessage()
});