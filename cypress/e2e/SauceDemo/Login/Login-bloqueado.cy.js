describe('Login SauceDemo', () => {


    it('Usuário tentando logar com login bloqueado', () => {

        //Login
        cy.visit('https://www.saucedemo.com/')

        cy.Login('locked_out_user', 'secret_sauce')

//Validação do erro

cy.get('[data-test="error"]')
.should('be.visible')
.and('contain', 'Sorry, this user has been locked out.')        

//Validação que não saiu da página de login

        cy.url().should('include', 'saucedemo.com')

    });

});