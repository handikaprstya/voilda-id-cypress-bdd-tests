Feature: Product Search on voila.id

    As a user i want to search for products on the voila.id
    So I can find the product I want

   Background: 
        Given I opened the main page of voila.id

   Scenario: Search for a product with the right name 
        When I type Adidas Samba in the search field
        And I pressed the search button
        Then I saw search results with a product that had name Adidas Samba

    Scenario: Product search not found
        When I type Product missing in the search field 
        And I pressed the search button
        Then I see the message Product not found

    Scenario: Product Search with price filter 
        When I type Adidas in the search field 
        And I pressed the search button
        And I filtered prices in the range 1200000 to 3000000
        Then I see search results that match the price filter

    Scenario: Product search with category filter 
        When I type Adidas in the search field
        And I pressed the search button
        And I filtered the Woman category
        Then I see search results that match with the category filter


