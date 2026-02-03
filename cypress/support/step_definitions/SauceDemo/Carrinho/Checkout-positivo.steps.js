const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está autenticado", () => {

    //Login
cy.visit('https://www.saucedemo.com/')

cy.Login('standard_user', 'secret_sauce')

cy.get('.title')
.should('contain', 'Products')
});

When("possui um produto no carrinho", () => {

cy.addBackpackToCart()
cy.goToCart()

cy.get('.title')
.should('contain', 'Your Cart')

cy.goToCheckout() 
});

When("informa seus dados pessoais obrigatórios", () => {

cy.fillCheckoutForm('Allan', 'Christian', '21865410')
});

When("confirma a finalização da compra", () => {

cy.get('.title')
.should('contain', 'Your Information')

cy.goToContinue()

cy.get('.title')
.should('contain', 'Overview')
});

Then("o pedido deve ser concluído com sucesso", () => {

cy.goToFinishCheckout()
});