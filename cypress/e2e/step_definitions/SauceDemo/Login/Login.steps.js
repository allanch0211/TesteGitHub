const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("que o usuário acessa a página de login do SauceDemo", () => {

  cy.clearCookies();
  cy.clearLocalStorage();

  cy.visit("/");
});

When("realiza login com usuário {string}", (tipoUsuario) => {

  cy.loginComUsuario(tipoUsuario);
});


When("clica no botão de login", () => {
  
  cy.clickLogin();
});

Then("o usuário deve ser autenticado com sucesso", () => {

  cy.url().should("include", "inventory");
  cy.contains("Products").should("be.visible");
});

Then("deve exibir erro de credenciais inválidas", () => {

  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "Username and password do not match");
});

Then("deve exibir erro de usuário bloqueado", () => {

  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "locked out");
});


