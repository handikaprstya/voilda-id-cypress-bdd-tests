const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

// Background step 
Given('I opened the main page of voila.id', () => {
    cy.visit("/account/login")
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        cy.loginValid(email, password)
    });
});

When('I choose a product', () => {
    cy.clickProduct()
});

Then('I was directed to the product details page', () => {
    cy.detailProduct()
});

// Validate product information 
 Given("I'm on the product details page", () => {
    cy.clickProduct()
    cy.detailProduct()
 });

Then('I see the product name', () => {
    cy.productName()
});

Then('I saw the product description', () => {
    cy.productDescription()
});

Then('I see the product price', () => {
    cy.productPrice()
});

// View product images
When("I'm on the product detail page", () => {
    cy.clickProduct()
    cy.detailProduct()
});


Then('I can slide image on the arrow button', () => {
    cy.thumbnail()
});

// Enlarge the product image
When("I saw the product image enlarged", () => {
    cy.zoomOver()
});

Then("I use the zoom feature on product images", () => {
    cy.listImage()
});
