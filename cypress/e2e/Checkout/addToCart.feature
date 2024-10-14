Feature: Add product to cart

    Background: 
        Given the user is on the login page

    Scenario: Successfully add a product to the cart
        When the user log in with valid credentials
        And the user searches for a product
        And the user selects the first product from the search results 
        And the user adds the product to the cart
        Then the product should be added to the cart successfully
        And the user should see the product in the cart