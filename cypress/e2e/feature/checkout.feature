Feature: Checkout Page

    Background:
        Given the user is on the checkout page of the Saucedemo website

    Scenario: Verify visibility of elements on the checkout page
        Then the ckeckout page should display the following elements:
            | element               |
            | First Name input      |
            | Last Name  input      |
            | Zip/Postal Code input |
            | checkout title        |
            | continue button       |
            | cancel button         |

    Scenario: Complete Checkout Form and Proceed to Next Step
        When the user fills out the checkout form with the following details:
            | First Name  | John  |
            | Last Name   | Doe   |
            | Postal Code | 12345 |
        And the user clicks the Continue button
        Then the checkout page should display the order review page

    Scenario: Submit Checkout Form with Empty Fields and Verify Error Messages
        When the user fills out the checkout form with empty values
        And the user clicks the Continue button
        Then the checkout page should display error messages for required fields