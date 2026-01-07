describe('Login-negativo SauceDemo', () => {
    it('Tentar login com credenciais inválidas', () => {


        cy.visit('https://www.saucedemo.com/')

        cy.Login('Allan', 'Christian')


        //Validação do erro

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')

        //Validação que não saiu da página de login

        cy.url().should('include', 'saucedemo.com')
        
    });
});