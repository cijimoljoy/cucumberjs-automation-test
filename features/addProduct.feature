Feature: Add Product(s)

    As a subscribed member I can add product(s) to my cart so that I can build up an online order

    Scenario Outline: Add a product to the basket
        Given the browser "<browser>" is loaded
        And that I am on the login page
        And that I have entered a valid username and password
        And I click “Log in”
        And that I am on the inventory shop page with an empty basket
        When I click “Add to cart” on a product "Sauce Labs Backpack"
        Then it will change the “Add to cart” button to “Remove” button of product "Sauce Labs Backpack"
        And it creates a counter on the basket icon with the value "1" in it

        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |

    Scenario Outline: Check basket counter increments or not
        Given the browser "<browser>" is loaded
        And that I am on the login page
        And that I have entered a valid username and password
        And I click “Log in”
        And that I am on the inventory shop page with an empty basket
        When I click “Add to cart” on a product "Sauce Labs Backpack"
        Then it will increment the basket counter by “1”

        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |