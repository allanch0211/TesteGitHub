describe('Login-negativo SauceDemo', () => {
    it('Tentar login com credenciais inválidas', () => {


        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('Allan')
        cy.get('[data-test="password"').type('Christian')

        cy.get('[data-test="login-button"]').click() 

        //Validação do erro

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')

        //Validação que não saiu da página de login

        cy.url().should('include', 'saucedemo.com')
        
    });
});