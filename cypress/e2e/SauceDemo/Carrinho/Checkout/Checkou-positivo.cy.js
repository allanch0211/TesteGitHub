describe('Checkout SauceDemo', () => {

beforeEach(() => {

    //Login
cy.visit('https://www.saucedemo.com/')

cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()

cy.get('.title')
.should('contain', 'Products')



//Adicionar produto 

cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="shopping-cart-link"]').click()

cy.get('.title')
.should('contain', 'Your Cart')
cy.get('[data-test="checkout"]').click()


    
});

it('Checkout Positivo', () => {

 //Checkout
    cy.get('[data-test="firstName"]').type('Allan')
cy.get('[data-test="lastName"]').type('Christian')
cy.get('[data-test="postalCode"]').type('21865410')

cy.get('.title')
.should('contain', 'Your Information')

cy.get('[data-test="continue"]').click()

cy.get('.title')
.should('contain', 'Overview')

cy.get('[data-test="finish"]').click() 
    
});
    


});