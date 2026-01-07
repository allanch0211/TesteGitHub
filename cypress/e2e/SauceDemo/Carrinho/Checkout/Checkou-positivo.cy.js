describe('Checkout SauceDemo', () => {

beforeEach(() => {

    //Login
cy.visit('https://www.saucedemo.com/')

cy.Login('standard_user', 'secret_sauce')

cy.get('.title')
.should('contain', 'Products')



//Adicionar produto 

cy.addBackpackToCart()
cy.goToCart()

cy.get('.title')
.should('contain', 'Your Cart')

cy.goToCheckout() 




    
});

it('Checkout Positivo', () => {

 //Checkout
    cy.fillCheckoutForm('Allan', 'Christian', '21865410')

cy.get('.title')
.should('contain', 'Your Information')

cy.goToContinue()

cy.get('.title')
.should('contain', 'Overview')

cy.goToFinishCheckout()
    
});
    


});