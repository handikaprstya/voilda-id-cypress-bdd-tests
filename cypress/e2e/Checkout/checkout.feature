Feature: Checkout products
        
    # Scenario: Attempt to checkout without logging in
    #     Given I have added a product to my cart
    #     When I go to the cart page
    #     And I click on the "Checkout" button
    #     Then I should be redirected to the login page

    # Scenario: Checkout with missing required fields
    #     Given the user is on the login page
    #     And I have at least one product in my cart
    #     When I click on the "Checkout" button
    #     And I leave some required fields empty "address or phone number"
    #     And I click the "Place Order" button
    #     Then I should see validation error messages for the missing fields

    # Scenario: Cancel the checkout process
    #     Given the user is on the login page
    #     And I have at least one product in my cart
    #     When I click on the "Checkout" button
    #     And I click the "Delete" button
    #     Then I should see a message "1 product has been removed."

    # Scenario: Apply an invalid promo code during checkout
    #     Given the user is on the login page
    #     And I have at least one product in my cart
    #     When I click on the "Checkout" button
    #     And I enter an invalid promo code
    #     Then I should see a message "Invalid promo code"

    Scenario: I click on the "Checkout" button
        Given the user is on the login page
        And I have at least one product in my cart
        When I click on the "Checkout" button
        And I do not select any payment method
        Then I should see a message "Please select a payment method"

    # Scenario: Successful checkout process
    #     Given the user is on the login page
    #     When the user log in with valid credentials
    #     And the user adds a product to the cart
    #     And the user proceeds to Checkout
    #     And the user selects a shipping method
    #     And the user selects a payment method
    #     And the user places the order 
    #     Then the user should see the order confirmation page