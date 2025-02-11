Feature: Product Detail Page Testing

    Background: 
        Given I opened the main page of voila.id

    Scenario: Access the product details page from the search results
        When I choose a product 
        Then I was directed to the product details page

    Scenario: Validate product information 
        Given I'm on the product details page 
        Then I see the product name
        And I saw the product description
        And I see the product price

    Scenario: View product images
        When I'm on the product detail page
        Then I can slide image on the arrow button

    Scenario: Enlarge the product image
        Given I'm on the product details page
        When I saw the product image enlarged
        Then I use the zoom feature on product images 

