Feature: Cart Page

    Background:
        Given the user is on the inventory page of the Saucedemo website
        And the user adds a product to the cart

    Scenario: Verify visibility of elements on the cart page
        When the user navigate to the cart page
        Then the cart page should display the following elements:
            | element                  |
            | QTY label                |
            | Description label        |
            | checkout button          |
            | cart title               |
            | continue shopping button |

    Scenario: Verify correct item details are displayed in the cart
        When the user navigate to the cart page
        Then the cart page should display correct item details

    Scenario: Verify successful removal of a product from the cart
        When the user navigate to the cart page
        And the user clicks the "Remove" button for the product
        Then the product should be successfully removed from the cart