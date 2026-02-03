const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário acessa a página de login do SauceDemo", () => {


cy.visit('https://www.saucedemo.com/')


});

When("realiza login com usuário {string}", (tipoUsuario) => {
const usuarios = {
        valido: {
        user: "standard_user",
        pass: "secret_sauce",
},
        invalido: {
        user: "Allan",
        pass: "Christian",
},
        bloqueado: {
        user: "locked_out_user",
        pass: "secret_sauce",
},
};

const dados = usuarios[tipoUsuario];

if (!dados) {
throw new Error(`Tipo de usuário inválido: ${tipoUsuario}`);
}

cy.Login(dados.user, dados.pass);
});


When("clica no botão de login", () => {

cy.ClickLogin()


});

Then("o usuário deve ser autenticado com sucesso", () => {

cy.url().should('include', 'inventory')

        cy.get('.title')
        .should('be.visible')
        .and('contain', 'Products')

});

Then("o sistema deve exibir uma mensagem de erro informando que as credenciais são inválidas", () => {

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')

});

Then("o sistema deve exibir uma mensagem de erro informando que o usuario esta bloqueado", () => {

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out.')

});

