describe('Carrinho SauceDemo', () => {

beforeEach(() => {
      //Login
cy.visit('https://www.saucedemo.com/')

cy.Login('standard_user', 'secret_sauce')

cy.get('.title')
.should('contain', 'Products')
})

it('Adicionar produto ao carrinho', () => {
    
    cy.addBackpackToCart()

    cy.goToCart()
    cy.get('.title').should('contain', 'Your Cart')



    
})

})
