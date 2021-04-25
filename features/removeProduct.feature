Feature: Remove Product(s)

    As a subscribed member I can remove product(s) from my cart so that I can check out with a cart only containing the items I want

    Scenario Outline: Remove a product from the basket
        Given the browser "<browser>" is loaded
        And that I am on the login page
        And that I have entered a valid username and password
        And I click “Log in”
        And that I am on the inventory shop page with an empty basket
        And I click “Add to cart” on a product "Sauce Labs Backpack"        
        And that I am on the inventory page with items in my basket
        When I click “Remove” on an item "Sauce Labs Backpack" I have in my basket
        Then it will change the “Remove” button to “Add to cart” button of product "Sauce Labs Backpack"
        And it will reduce the basket counter icon accordingly

        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |