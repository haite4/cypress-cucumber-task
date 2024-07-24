

class loginPage {
    

    get usernameInput(){
        return cy.get("[data-test='username']")
    }

    get passwordInput(){
        return cy.get("[data-test='password']")
    }


    get submitButton(){
        return cy.get("[data-test='login-button']")
    }



    login(username, password){
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.submitButton.click();
        
    }

}






module.exports = new loginPage();