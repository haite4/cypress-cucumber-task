class cartPage {
  get checkoutButton() {
    return cy.get("[data-test='checkout']");
  }

  get titleCart() {
    return cy.get("[data-test='title']");
  }

  get cartDescriptionLabel() {
    return cy.get("[data-test='cart-desc-label']");
  }

  get cartQuantityLabel() {
    return cy.get("[data-test='cart-quantity-label']");
  }

  get continueShoppingButton() {
    return cy.get("[data-test='continue-shopping']");
  }

  get inventoryItem() {
    return cy.get("[data-test='inventory-item']");
  }

  clickCheckoutButton() {
    this.checkoutButton.click();
  }
}

module.exports = new cartPage();
