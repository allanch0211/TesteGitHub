describe('Checkout Campos Obrigatorios Negativo', () => {



beforeEach(() => {

    //Login
cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()

//Adiconar produto 

cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="shopping-cart-link"]').click()
cy.get('[data-test="checkout"]').click()

//Validação da página de checkout 

cy.url().should('include', 'checkout-step-one')
    
});

    it('Realizando checkout sem digitar nada', () => {

        cy.get('[data-test="continue"]').click()


        //Validação do erro

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required')

        //Validação da continuidade na página

        cy.url().should('include', 'checkout-step-one')



        
    });
});