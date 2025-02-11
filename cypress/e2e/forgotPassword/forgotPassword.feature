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
        
    Scenario: Forgot password with invalid email
        Given The user is on the forgot password page
        When I input invalid email
        And I clicked forgot password button
        Then Appeared alert message "The email or phone number you entered is not registered."

    Scenario: Forgot password with invalid number phone
        Given The user is on the forgot password page
        When I input invalid phone number
        And I clicked forgot password button
        Then Appeared alert message "The email or phone number you entered is not registered."