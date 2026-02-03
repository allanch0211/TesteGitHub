const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está autenticado no SauceDemo", () => {

    //Login
cy.visit('https://www.saucedemo.com/')

cy.Login('standard_user', 'secret_sauce')

cy.get('.title')
.should('contain', 'Products')
});

When("possui um produto adicionado ao carrinho", () => {

    cy.addBackpackToCart()
});

When("acessa o carrinho", () => {

    cy.goToCart()
    
});

Then("o sistema deve exibir o carrinho com o produto adicionado", () => {

    cy.get('.title').should('contain', 'Your Cart')
});

