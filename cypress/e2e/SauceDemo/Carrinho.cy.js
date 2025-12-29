describe('Carrinho SauceDemo', () => {
    it('Adicionar produto ao carrinho na loja', () => {

         //Site
        cy.visit('https://www.saucedemo.com/')


        //Preenchendo login
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        
        //Validação de login 

        cy.url().should('include', 'inventory')
        cy.get('.title').should('contain', 'Products')

        //Adicionando produto ao carrinho 

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 

        //Conferindo produto no carrinho 

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.url().should('include', 'cart')
        cy.get('.title').should('contain', 'Your Cart')

        //Checkout 

        cy.get('[data-test="checkout"]').click()

        cy.url().should('include', 'checkout-step-one')
        cy.get('.title').should('contain', 'Checkout: Your Information') 

        //Preenchendo informação pessoal

        cy.get('[data-test="firstName"]').type('Allan')
        cy.get('[data-test="lastName"]').type('Christian')
        cy.get('[data-test="postalCode"]').type('21864910')

        //Finalizando compra

        cy.get('[data-test="continue"]').click()

        cy.url().should('include', 'checkout-step-two')
        cy.get('.title').should('contain', 'Checkout: Overview')

        cy.get('[data-test="finish"]').click()




    });
});