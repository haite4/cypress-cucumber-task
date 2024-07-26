class inventoryPage {
  get titleOnPage() {
    return cy.get("[data-test='title']");
  }

  get inventoryList() {
    return cy.get("[data-test='inventory-list']");
  }

  get inventoryItemName() {
    return cy.get("[data-test='inventory-item-name']");
  }

  get inventoryItemPrice() {
    return cy.get("[data-test='inventory-item-price']");
  }

  get allAddToCartButtons() {
    return cy.get(".btn_inventory");
  }

  get addToCartButton() {
    return cy.get("[data-test='add-to-cart-sauce-labs-backpack']");
  }

  get shoppingCartBadge() {
    return cy.get("[data-test='shopping-cart-badge']");
  }

  get removeButton() {
    return cy.get("[data-test='remove-sauce-labs-backpack']");
  }

  get inventoryItemPrice() {
    return cy.get("[data-test='inventory-item-price']");
  }

  get inventoryItemName() {
    return cy.get("[data-test='inventory-item-name']");
  }

  get shoppingCartLink() {
    return cy.get("[data-test='shopping-cart-link']");
  }

  clickShoppingCartLink() {
    this.shoppingCartLink.click();
  }

  clickAddToCartButton() {
    this.addToCartButton.click();
  }

  clickRemoveButton() {
    this.removeButton.click();
  }
}

module.exports = new inventoryPage();
