Feature: Forgot Password

    As a registered user
    I forgot my password
    So I can forget my password with a valid email

    Scenario: Forgot password with valid email
        Given the user is on the login page
        When the user enters a valid email
        And I clicked the forgot password 
        And I input a valid email
        And I clicked forgot password button
        Then a message came to my email
        
