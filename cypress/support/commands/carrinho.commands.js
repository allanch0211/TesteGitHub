

Cypress.Commands.add('addBackpackToCart', () => {

cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()


})



Cypress.Commands.add('goToCart', () => {

cy.get('[data-test="shopping-cart-link"]').click()


})



Cypress.Commands.add('goToCheckout', () => {

cy.get('[data-test="checkout"]').click()


})