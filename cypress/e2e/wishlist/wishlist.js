const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

// Background step
Given("I opened the main page of voila.id", () => {
    cy.visit("/account/login")
    cy.fixture("user").then(user => {
        const email = user.validUser.email
        const password = user.validUser.password

        cy.loginValid(email, password)
    })
});

// Add product to wishlist 
Given("I'm on the product details page", () => {
    cy.clickProduct()
    cy.detailProduct()
});

When("I add a product to the wishlist", () => {
    cy.addToWishlist()
});

Then("The product is added to the wishlist", () => {
    cy.notification()
});

// View user's wishlist
When('The user navigates to the wishlist page', () => {
    cy.wishlist()
});

Then('The user sees a list of products in their wishlist', () => {
    cy.wishlistProduct()
});

// Remove a product from the wishlist
When("The user removes a product from the wishlist", () => {
    cy.wishlist()
    cy.removeWishlist()
});

Then("The product is no longer visible in the wishlist", () => {
    cy.wishlistCheck()
});

// Validate message for empty wishlist  
Given('The user is on the home page', () => {
    
});

Then('The user sees a message "Your wishlist is empty"', () => {
    cy.validateRemoveWishlist()
});

// Add a product from wishlist to cart 
Given("The user is on the wishlist page", () => {
    cy.clickProduct()
    cy.detailProduct()
    cy.addToWishlist()
    cy.wishlist()
});

When("The user adds a product from the wishlist to the cart", () => {
    cy.wishlistToCart()
});

Then("The product appears in the shopping cart", () => {
    cy.wishlistResult()
});

// Wishlist is accessible only after login
Given("The user is not logged in", () => {
    cy.logoutAccount()
});

When("The user attempts to access the wishlist page", () => {
    cy.wishlist()
});

Then("The user is redirected to the login page", () => {
    cy.directedLoginPage()
});

