class AssertInformation {

    VerificacaoDaTelaInicial() {

    cy.get('a[id="nav-global-location-popover-link"]')
        .should('be.visible')

    cy.get('span[class="nav-line-2 nav-progressive-content"]')
        .should('be.visible')
        .contains('Atualizar CEP')
}

PesquisaDoProduto(prod) {

    cy.get('div[class="a-section a-spacing-none s-breadcrumb-header-text"]')
    .should('contain.text', prod)

    cy.get('a[href="/gp/cart/view.html?ref_=nav_cart"]')
        .should('be.visible')
        .contains('Carrinho')
}

VerificacaoDoProduto(conf) {
     cy.get('h2[class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]')
        .contains(conf)
        .click()

            cy.get('input[id="add-to-cart-button"]')
        .should('be.visible')
        
}

   






    }


export default AssertInformation;