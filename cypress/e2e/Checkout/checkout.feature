Feature: Checkout products

    Background: 
        Given the user is on the login page

    Scenario: Successful checout process
        When the user log in with valid credentials
        And the user adds a product to the cart
        And the user proceeds to Checkout
        And the user selects selects a shipping method
        And the user selects a payment method
        And the user places the order 
        Then the user should see the order confirmation page