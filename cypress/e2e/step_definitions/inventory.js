import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage";

Given("the user is on the inventory page of the Saucedemo website", () => {
  cy.visit("/");
  loginPage.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("user view the list of products", () => {
  inventoryPage.inventoryList.should("be.visible");
});

When("user clicks the {string} button for a product", (buttonLabel) => {
  switch (buttonLabel) {
    case "Add to cart":
      inventoryPage.clickAddToCartButton();
      break;
    case "Remove":
      inventoryPage.clickRemoveButton();
      break;
  }
});

When("user selects the {string} filter", (sortOrder) => {
  cy.get(".product_sort_container").select(sortOrder);
});

Then("each product should have a {string} displayed", (attributeType) => {
  switch (attributeType) {
    case "title":
      inventoryPage.inventoryItemName.should("be.visible");
      break;
    case "price":
      inventoryPage.inventoryItemPrice.should("be.visible");
      break;
    case "add_to_cart":
      inventoryPage.allAddToCartButtons.should("be.visible");
      break;
  }
});

Then(
  "the {string} button should change to {string}",
  (currentButtonLabel, expectedButtonLabel) => {
    switch (currentButtonLabel) {
      case "Add to cart":
        inventoryPage.removeButton.should("have.text", expectedButtonLabel);
        break;
      case "Remove":
        inventoryPage.addToCartButton.should("have.text", expectedButtonLabel);
        break;
    }
  }
);

Then("the cart button quantity should update to {int}", (expectedQuantity) => {
  switch (expectedQuantity) {
    case 1:
      inventoryPage.shoppingCartBadge.should("be.visible");
      inventoryPage.shoppingCartBadge.should("have.text", "1");
      break;
    case 0:
      inventoryPage.shoppingCartBadge.should("not.exist");
      break;
  }
});

Then("products should be sorted from {string} price", (sortOrder) => {
  const prices = [];
  switch (sortOrder) {
    case "low to high":
      inventoryPage.inventoryItemPrice
        .each(($el) => {
          prices.push(parseFloat($el.text().replace("$", "")));
        })
        .then(() => {
          const sortedPrices = [...prices].sort((a, b) => a - b);
          expect(prices).to.deep.equal(sortedPrices);
        });
      break;
    case "high to low":
      inventoryPage.inventoryItemPrice
        .each(($el) => {
          prices.push(parseFloat($el.text().replace("$", "")));
        })
        .then(() => {
          const sortedPrices = [...prices].sort((a, b) => b - a);
          expect(prices).to.deep.equal(sortedPrices);
        });
      break;
  }
});

Then("products should be sorted from {string} name", (sortOrder) => {
  const names = [];
  switch (sortOrder) {
    case "A to Z":
      inventoryPage.inventoryItemName
        .each(($el) => {
          names.push($el.text());
        })
        .then(() => {
          const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
          expect(names).to.deep.equal(sortedNames);
        });
      break;
    case "Z to A":
      inventoryPage.inventoryItemName
        .each(($el) => {
          names.push($el.text());
        })
        .then(() => {
          const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
          expect(names).to.deep.equal(sortedNames);
        });
  }
});
