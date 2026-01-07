describe('Login SauceDemo', () => {


    it('Usuário tentando logar com login bloqueado', () => {

        //Login
        cy.visit('https://www.saucedemo.com/')

        cy.Login('locked_out_user', 'secret_sauce')


//Validação de continuidade na página 

cy.url().should('eq', 'https://www.saucedemo.com/')

//Mensagem de erro

cy.get('[data-test="error"]')
.should('be.visible')
.and('contain', 'Sorry, this user has been locked out.')        


    });

});