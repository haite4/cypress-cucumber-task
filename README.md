# Playwright-task

## Summary

This repository includes 16 automated tests written using the Cypress framework, Cucumber, and JavaScript. These tests validate the functionality of key elements on the [Sauce Demo](https://www.saucedemo.com/) website, including the login, inventory, cart, and checkout pages.

## Requirements

- [Node.js v14 or higher](https://nodejs.org/en/download/package-manager)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [cucumber-json-formatter](https://github.com/cucumber/json-formatter)

## Steps to Install

1. Clone the repository:
    ```sh
    git clone https://github.com/haite4/cypress-cucumber-task
    ```
2. Navigate to the project directory:
    ```sh 
    cd cypress-cucumber-task
    ```
3. Install dependencies:
    ```sh
    npm install cypress --save-dev
    npm install 
    ``` 

## Steps to Launch

1. **Run all Cypress tests in headless mode**:
    ```sh
    npm run cypress:run
    ```
    To use a configuration file for mobile testing:
    ```sh
    npm run test:mobile
    ```

2. **Run tests with a specific browser**:
    - For Chrome:
        ```sh
        npm run test:chrome
        ```
    - For Firefox:
        ```sh
        npm run test:firefox
        ```
    - For Edge:
        ```sh
        npm run test:edge
        ```

3. **Open Cypress Test Runner for interactive testing**:
    ```sh
    npm run cypress:open
    ```
    This command will open the Cypress Test Runner, allowing you to run and debug tests interactively in the Cypress GUI.
    
4. **Run tests for specific pages**:
    - **Login Page Tests**:
        ```sh
        npm run test:login:run
        ```
    - **Inventory Page Tests**:
        ```sh
        npm run test:inventory:run
        ```
    - **Cart Page Tests**:
        ```sh
        npm run test:cart:run
        ```
    - **Checkout Page Tests**:
        ```sh
        npm run test:checkout:run
        ```
## Steps to Launch the Report
    ```
1. Serve the html report:
    ```sh
    npm run cypress:report
    ```