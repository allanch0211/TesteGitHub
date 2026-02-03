


Cypress.Commands.add("Login", (user, password) => {
cy.get('[data-test="username"]').type(user);
cy.get('[data-test="password"]').type(password);
});


Cypress.Commands.add("ClickLogin", () => {
cy.get('[data-test="login-button"]').click();
});

