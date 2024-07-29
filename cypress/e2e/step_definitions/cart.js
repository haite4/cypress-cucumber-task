import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cartPage from "../../pages/cartPage";
import inventoryPage from "../../pages/inventoryPage";
import endpoints from "../../fixtures/endpoints.json";

Given("the user adds a product to the cart", () => {
  inventoryPage.clickAddToCartButton();
});

When("the user navigate to the cart page", () => {
  inventoryPage.clickShoppingCartLink();
  cy.url().should("include", endpoints.cart);
});

When("the user clicks the {string} button for the product", (buttonLabel) => {
  if (buttonLabel == "Remove") {
    inventoryPage.clickRemoveButton();
  }
});

Then("the cart page should display the following elements:", (table) => {
  table.hashes().forEach((row) => {
    switch (row.element) {
      case "QTY label":
        cartPage.cartQuantityLabel.should("be.visible");
        break;
      case "Description label":
        cartPage.cartDescriptionLabel.should("be.visible");
        break;
      case "checkout button":
        cartPage.checkoutButton.should("be.visible");
        break;
      case "cart title":
        cartPage.titleCart.should("be.visible");
        break;
      case "continue shopping button":
        cartPage.continueShoppingButton.should("be.visible");
        break;
    }
  });
});

Then("the cart page should display correct item details", () => {
  cartPage.inventoryItem.should("exist");
  inventoryPage.inventoryItemPrice.should("be.visible");
  inventoryPage.inventoryItemName.should("be.visible");
  inventoryPage.removeButton.should("be.visible");
});

Then("the product should be successfully removed from the cart", () => {
  cartPage.inventoryItem.should("not.exist");
});
