


Cypress.Commands.add('Login', (user, pass) => {

cy.get('[data-test="username"]').type(user)
cy.get('[data-test="password"]').type(pass)
cy.get('[data-test="login-button"]').click() 



}) 