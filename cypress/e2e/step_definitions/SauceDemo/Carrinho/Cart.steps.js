const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When("possui um produto adicionado ao carrinho", () => {

    cy.addBackpackToCart()
});

When("acessa o carrinho", () => {

    cy.goToCart()
    
});

Then("o sistema deve exibir o carrinho com o produto adicionado", () => {

    cy.get('.title').should('contain', 'Your Cart')
});

