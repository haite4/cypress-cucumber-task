import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";

Given("the user is on the login page of the Saucedemo website", () => {
  cy.visit("/");
});

When(
  "the user enters the username {string} and the password {string} and clicks on the login button",
  (username, password) => {
    loginPage.login(username, password);
  }
);

Then(
  "the user should be redirected to the inventory page and see {string} title on the page",
  (title) => {
    cy.url().should("include", "/inventory.html")
    inventoryPage.titleOnPage.should('contain', title)
  }
);
