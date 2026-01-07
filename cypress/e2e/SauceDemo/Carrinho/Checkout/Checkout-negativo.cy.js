describe('Checkout Campos Obrigatorios Negativo', () => {



beforeEach(() => {

    //Login
cy.visit('https://www.saucedemo.com/')
cy.Login('standard_user', 'secret_sauce')

//Adiconar produto 

cy.addBackpackToCart()

cy.goToCart()

cy.goToCheckout()

//Validação da página de checkout 

cy.url().should('include', 'checkout-step-one')
    
});

    it('Realizando checkout sem digitar nada', () => {

        cy.goToContinue()


        //Validação do erro

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required')

        //Validação da continuidade na página

        cy.url().should('include', 'checkout-step-one')



        
    });
});