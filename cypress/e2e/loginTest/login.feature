Feature: Login Functionality

    As a registered user
    I want to login into application
    So that I can access my account dashboard and logout account

  Scenario: Login with valid credentials
      Given the user is on the login page
      When the user enters a valid email
      And the user enters a valid password
      And the user clicks the login button
      And the user should see the dashboard with a "Limited Offers" section
      Then the user should logout from account

  Scenario: Login with invalid password
      Given the user is on the login page
      When the user enters a valid email
      And the user enters an invalid password
      And the user clicks the login button
      Then an error message appears
  
  Scenario: Login with invalid email
   Given the user is on the login page
   When the user enters an invalid email
   And the user clicks the login button
   Then the user is directed to the register page


  Scenario: Login with invalid email and password
    Given the user is on the login page
    When the user enters an invalid email
    And the user clicks the login button
    Then the user is directed to the register page