Feature: Login Page


    Background:
        Given the user is on the login page of the Saucedemo website

    Scenario: Login with valid credentials
        When the user enters the username "standard_user" and the password "secret_sauce" and clicks on the login button
        Then the user should be redirected to the inventory page and see "Products" title on the page

    Scenario: Login with blocked credentials
        When the user enters the username "locked_out_user" and the password "secret_sauce" and clicks on the login button
        Then the error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Login with incorrect Username
        When a user provides incorrect credentials, and click on the login button
            | username     | password     |
            | testUsername | secret_sauce |
        Then the error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Login with incorrect Password
        When a user provides incorrect credentials, and click on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then the error message "Epic sadface: Username and password do not match any user in this service" is displayed