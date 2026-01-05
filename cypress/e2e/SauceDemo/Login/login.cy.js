describe('Login positivo', () => {
    it('Realizar login com credencias válidas', () => {


        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()


        //Validação de login

        cy.url().should('include', 'inventory')

        cy.get('.title')
        .should('be.visible')
        .and('contain', 'Products')
        
    });
});