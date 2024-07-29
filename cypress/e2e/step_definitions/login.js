import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";
import credentials from "../../fixtures/credentials.json";
import { faker } from "@faker-js/faker";
import endpoints from "../../fixtures/endpoints.json";

Given("the user is on the login page of the Saucedemo website", () => {
  cy.visit("/");
});

When("user logs in", () => {
  loginPage.login(credentials.username, credentials.password);
});

When("user logs in with locked out user creds", () => {
  loginPage.login(credentials.locked_user, credentials.password);
});

When("user types in an invalid username", () => {
  loginPage.login(faker.internet.password(), credentials.password);
});

When("user types in an invalid password", () => {
  loginPage.login(credentials.username, faker.internet.password());
});

Then(
  "the user should be redirected to the inventory page and see {string} title on the page",
  (title) => {
    cy.url().should("include", endpoints.inventory);
    inventoryPage.titleOnPage.should("contain", title);
  }
);

Then("the error message {string} is displayed", (errorMessage) => {
  loginPage.errorMessage.should("have.text", errorMessage);
});
