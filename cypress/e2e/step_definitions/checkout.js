import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";
import cartPage from "../../pages/cartPage";
import checkoutPage from "../../pages/checkoutPage";
import endpoints from "../../fixtures/endpoints.json";

Given("the user is on the checkout page of the Saucedemo website", () => {
  cy.visit("/");
  loginPage.login("standard_user", "secret_sauce");
  inventoryPage.clickShoppingCartLink();
  cartPage.clickCheckoutButton();
});

When(
  "the user fills out the checkout form with the following details:",
  (table) => {
    const data = table.rowsHash();
    checkoutPage.fillCheckoutInfoForm(
      data["First Name"],
      data["Last Name"],
      data["Postal Code"]
    );
  }
);

When("the user clicks the Continue button", () => {
  checkoutPage.clickContinueButton();
});

When("the user fills out the checkout form with empty values", () => {
  checkoutPage.clearFirstNameField();
  checkoutPage.clearLastNameField();
  checkoutPage.clearZipPostalCodeField();
});

Then("the ckeckout page should display the following elements:", (table) => {
  table.hashes().forEach((row) => {
    switch (row.element) {
      case "First Name input":
        checkoutPage.firstNameInput.should("be.visible");
        break;
      case "Last Name  input":
        checkoutPage.lastNameInput.should("be.visible");
        break;
      case "Zip/Postal Code input":
        checkoutPage.zipPostalCodeInput.should("be.visible");
        break;
      case "checkout title":
        checkoutPage.checkoutTitle.should("be.visible");
        break;
      case "continue button":
        checkoutPage.continueButton.should("be.visible");
        break;
      case "cancel button":
        checkoutPage.cancelButton.should("be.visible");
        break;
    }
  });
});

Then("the checkout page should display the order review page", () => {
  cy.url().should("include", endpoints.checkout_step_two);
});

Then(
  "the checkout page should display error messages for required fields",
  () => {
    checkoutPage.errorMessage.should("be.visible");
  }
);
