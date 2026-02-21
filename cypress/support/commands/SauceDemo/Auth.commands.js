


Cypress.Commands.add("login", (usuario, senha) => {
cy.get('[data-test="username"]').type(usuario);
cy.get('[data-test="password"]').type(senha);
});


Cypress.Commands.add("clickLogin", () => {
cy.get('[data-test="login-button"]').click();
});

