describe('Login SauceDemo', () => {


    it('Usuário tentando logar com login bloqueado', () => {

        //Login
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

//Validação de continuidade na página 

cy.url().should('eq', 'https://www.saucedemo.com/')

//Mensagem de erro

cy.get('[data-test="error"]')
.should('be.visible')
.and('contain', 'Sorry, this user has been locked out.')        


    });

});