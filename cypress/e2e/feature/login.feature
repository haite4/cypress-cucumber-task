Feature: Login Page

    Background:
        Given the user is on the login page of the Saucedemo website

    Scenario: Login with valid credentials
        When user logs in
        Then the user should be redirected to the inventory page and see "Products" title on the page

    Scenario: Login with blocked credentials
        When user logs in with locked out user creds
        Then the error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Login with incorrect Username
        When user types in an invalid username
        Then the error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Login with incorrect Password
        When user types in an invalid password
        Then the error message "Epic sadface: Username and password do not match any user in this service" is displayed