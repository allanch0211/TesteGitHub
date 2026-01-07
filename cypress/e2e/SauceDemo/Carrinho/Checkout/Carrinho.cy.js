describe('Carrinho SauceDemo', () => {

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.Login('standard_user', 'secret_sauce')

    

    cy.url().should('include', 'inventory')
})

it('Adicionar produto ao carrinho', () => {
    
    cy.addBackpackToCart()

    cy.goToCart()
    cy.get('.title').should('contain', 'Your Cart')



    
})

})
