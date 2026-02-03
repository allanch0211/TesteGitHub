


Cypress.Commands.add("Login", (usuario, senha) => {
cy.get('[data-test="username"]').type(usuario);
cy.get('[data-test="password"]').type(senha);
});


Cypress.Commands.add("ClickLogin", () => {
cy.get('[data-test="login-button"]').click();
});

