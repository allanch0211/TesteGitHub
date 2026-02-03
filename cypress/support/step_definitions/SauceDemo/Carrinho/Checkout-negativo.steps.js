const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está autenticado", () => {

    //Login
cy.visit('https://www.saucedemo.com/')

cy.Login('standard_user', 'secret_sauce')

cy.get('.title')
.should('contain', 'Products')
});

When("possui um produto no carrinho", () => {

//Adiconar produto 

cy.addBackpackToCart()

cy.goToCart()

cy.goToCheckout()

//Validação da página de checkout 

cy.url().should('include', 'checkout-step-one')
});

When("não informa os dados pessoais obrigatórios e tenta finalziar o pedido", () => {

cy.goToContinue()
});


Then("o sistema deve exibir uma mensagem de erro e impedir a finalização do pedido", () => {

 //Validação do erro

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required')

        //Validação da continuidade na página

        cy.url().should('include', 'checkout-step-one')
});