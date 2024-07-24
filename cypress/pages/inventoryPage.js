


class inventoryPage {
    
    get titleOnPage(){
        return cy.get("[data-test='title']")
    }
}




module.exports = new inventoryPage();