Feature: Login Page

Background: 
    Given the user is on the login page of the Saucedemo website
Scenario: Verify login with valid credentials
When the user enters the username "standard_user" and the password "secret_sauce" and clicks on the login button
Then the user should be redirected to the inventory page and see "Products" title on the page


