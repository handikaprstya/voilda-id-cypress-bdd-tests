const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
import {LoginPage} from '../../support/commands';

// Login with valid credentials
Given('the user is on the login page', () => {
    cy.visit("/account/login")
});

When('the user enters a valid email', () => {
    cy.fixture("user").then(user => {
        const email = user.validUser.email;

        LoginPage.inputValidEmail(email)
    })
});

When('the user enters a valid password', () => {
    cy.fixture("user").then(user => {
        const password = user.validUser.password;

        LoginPage.inputValidPassword(password);
    });
});

When('the user clicks the login button', () => {
    LoginPage.buttonLogin()
});

When('the user should see the dashboard with a "Limited Offers" section', () => {
    LoginPage.homePage()
});

Then('the user should logout from account', () => {
    cy.logoutAccount()
});


// Login with invalid password
When('the user enters an invalid password', () => {
    cy.fixture("user").then(user => {
        LoginPage.inputInvalidPassword(user)
    });
});


Then('an error message appears', () => {
    LoginPage.errorMessage();
});

// login with invalid email
When('the user enters an invalid email', () => {
    cy.fixture("user").then(user => {
        LoginPage.inputInvalidEmail(user)
    });
});

Then('the user is directed to the register page', () => {
    LoginPage.registerPage();
});



