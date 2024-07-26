class checkoutPage {
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get zipPostalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  get checkoutTitle() {
    return cy.get('[data-test="title"]');
  }

  get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  get cancelButton() {
    return cy.get('[data-test="cancel"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  fillCheckoutInfoForm(firstName, lastName, ZipCode) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.zipPostalCodeInput.type(ZipCode);
  }

  clickContinueButton() {
    this.continueButton.click();
  }

  clearFirstNameField() {
    this.firstNameInput.clear();
  }

  clearLastNameField() {
    this.lastNameInput.clear();
  }

  clearZipPostalCodeField() {
    this.zipPostalCodeInput.clear();
  }
}

module.exports = new checkoutPage();
