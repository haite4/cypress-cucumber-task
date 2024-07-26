Feature: Inventory Page

    Background:
        Given the user is on the inventory page of the Saucedemo website

    Scenario Outline: Verify visibility of product attributes on inventory page
        When user view the list of products
        Then each product should have a "<attribute>" displayed
        Examples:
            | attribute   |
            | title       |
            | price       |
            | add_to_cart |

    Scenario: Verify button changes and cart quantity updates after adding a product
        When user view the list of products
        And user clicks the "Add to cart" button for a product
        Then the "Add to cart" button should change to "Remove"
        And the cart button quantity should update to 1

    Scenario: Verify button changes and cart quantity updates after removing a product
        When user view the list of products
        And user clicks the "Add to cart" button for a product
        And user clicks the "Remove" button for a product
        Then the "Remove" button should change to "Add to cart"
        And the cart button quantity should update to 0

    Scenario: filter products from low to high price
        When user view the list of products
        And user selects the "Price (low to high)" filter
        Then products should be sorted from "low to high" price

    Scenario: filter products from high to low price
        When user view the list of products
        And user selects the "Price (high to low)" filter
        Then products should be sorted from "high to low" price

    Scenario: Filter products and verify sorting from A to Z by name
        When user view the list of products
        And user selects the "Name (A to Z)" filter
        Then products should be sorted from "A to Z" name

    Scenario: Filter products and verify sorting from Z to A by name
        When user view the list of products
        And user selects the "Name (Z to A)" filter
        Then products should be sorted from "Z to A" name