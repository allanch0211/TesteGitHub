const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Carrinho
When("possui um produto no carrinho", () => {
  cy.addBackpackToCart();
  cy.goToCart();
  cy.goToCheckout();
});

// Dados válidos
When("informa dados pessoais obrigatórios válidos", () => {
  cy.fillCheckoutForm("Allan", "Christian", "21865410");
  cy.goToContinue();
});

// Dados inválidos
When("tenta finalizar a compra sem informar os dados pessoais obrigatórios", () => {
  cy.goToContinue();
});

// Finalizar
When("confirma a finalização da compra", () => {
  cy.goToFinishCheckout();
});

// Sucesso
Then("o pedido deve ser concluído com sucesso", () => {
  cy.contains("Thank you for your order").should("be.visible");
});

// Erro
Then("o sistema deve exibir uma mensagem de erro e impedir a finalização do pedido", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "Error: First Name is required");

  cy.url().should("include", "checkout-step-one");
});
