


Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {

cy.get('[data-test="firstName"]').type('firstName')
cy.get('[data-test="lastName"]').type('lastName')
cy.get('[data-test="postalCode"]').type('postalCode')



})




Cypress.Commands.add('goToContinue', () => {

cy.get('[data-test="continue"]').click()


})



Cypress.Commands.add('goToFinishCheckout', () => {

cy.get('[data-test="finish"]').click() 


})