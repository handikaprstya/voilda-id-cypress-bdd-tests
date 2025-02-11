const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


// Background step
Given("I opened the main page of voila.id", () => {
    cy.visit("/account/login")
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        cy.loginValid(email, password)
    })
});

When("I type Adidas Samba in the search field", () => {
    cy.searchProduct()
});

When("I pressed the search button", () => {
    cy.enterProduct()
});

Then("I saw search results with a product that had name Adidas Samba", () => {
    cy.productResult()
});

// Product search not found
When("I type Product missing in the search field", () => {
    cy.productMissing()
});

Then("I see the message Product not found", () => {
    cy.productResultMissing()
});

// Product Search with price filter
When("I type Adidas in the search field", () => {
    cy.adidas()
});

When('I filtered prices in the range 1200000 to 3000000', () => {
    cy.priceRange()
});

Then('I see search results that match the price filter', () => {
    cy.filterResult()
});

// Product search with category filter 
When('I filtered the Woman category', () => {
    cy.womanFilter()
});

Then('I see search results that match with the category filter', () => {
    cy.categoryFilter()
})