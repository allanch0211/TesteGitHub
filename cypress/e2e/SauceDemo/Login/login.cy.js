describe('Login positivo', () => {
    it('Realizar login com credencias válidas', () => {


        cy.visit('https://www.saucedemo.com/')

        cy.Login('standard_user', 'secret_sauce')


        //Validação de login

        cy.url().should('include', 'inventory')

        cy.get('.title')
        .should('be.visible')
        .and('contain', 'Products')
        
    });
});