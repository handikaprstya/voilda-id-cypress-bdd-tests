Feature: User Registration

    As a user
    I want to register a new account
    So that I can access the voila platform

    Scenario: Register with an already registered email
        Given I am on the registration page
        When I Input email with registered email
        And I input password with valid password
        And I click the "Register Account" button
        Then I directed to login page

    Scenario: Register by filling in the spaces for email and password
        Given I am on the registration page
        When I input space in all fields 
        And I click the "Register Account" button
        Then I should see error messages "Please enter a valid email format or phone number." "Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers." for all fields

    Scenario: Register without filling all fields
        Given I am on the registration page
        When I leave all fields blank
        And I click the "Register Account" button
        Then I should see error messages "Field cannot be empty!" for all fields

    Scenario: Register with invalid email format
        Given I am on the registration page
        When I fill "Email" with invalid email
        And I fill "Password" with valid password
        And I click the "Register Account" button
        Then I should see an error message "Please enter a valid email format or phone number."

    Scenario: Register with invalid password format
        Given I am on the registration page
        When I fill "Email" with valid email
        And I fill "Password" with invalid password
        And I click the "Register Account" button
        Then I should see an error message "Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers."
      
    Scenario: Register with a Phone number more than 12 numbers
        Given I am on the registration page
        And I fill "Email or Phone Number" with more than 12 numbers
        And I fill "Password" with valid password
        And I click the "Register Account" button
        Then I should see an error message "Please enter a valid email format or phone number."

    Scenario: Register with a Phone number less than 9 numbers
        Given I am on the registration page
        And I fill "Email or Phone Number" with less than 12 numbers
        And I fill "Password" with valid password
        And I click the "Register Account" button
        Then I should see an error message "Please enter a valid email format or phone number."