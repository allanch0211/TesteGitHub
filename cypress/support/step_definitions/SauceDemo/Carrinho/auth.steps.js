const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está autenticado", () => {

  // Limpar sessão
cy.clearCookies()
cy.clearLocalStorage()

  // Abrir o site
cy.visit('https://www.saucedemo.com/')

  // Login
cy.login('standard_user', 'secret_sauce')
cy.clickLogin()

  // Validação de login
cy.get('.title')
.should('contain', 'Products')

  // Reset do estado
cy.get('#react-burger-menu-btn').click()
cy.get('#reset_sidebar_link').click()
cy.get('#react-burger-cross-btn').click()
});
