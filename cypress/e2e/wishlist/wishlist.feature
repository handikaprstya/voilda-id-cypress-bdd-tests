Feature: Wishlist Management

    Background: 
         Given I opened the main page of voila.id

    Scenario: Add product to wishlist 
        Given I'm on the product details page 
        When I add a product to the wishlist
        Then The product is added to the wishlist

    Scenario: View user's wishlist
        Given I'm on the product details page 
        When The user navigates to the wishlist page
        Then The user sees a list of products in their wishlist

    Scenario: Remove a product from the wishlist
        Given I'm on the product details page 
        When The user removes a product from the wishlist
        Then The product is no longer visible in the wishlist

    Scenario: Validate message for empty wishlist
        Given The user is on the home page
        Then The user sees a message "Your wishlist is empty"

    Scenario: Add a product from wishlist to cart 
        Given The user is on the wishlist page
        When The user adds a product from the wishlist to the cart
        Then The product appears in the shopping cart

    Scenario: Wishlist is accessible only after login
        Given The user is not logged in
        When The user attempts to access the wishlist page
        Then The user is redirected to the login page
