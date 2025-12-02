class elementoPagina {


    PesquisaBarraDePesquia(tipoProduto) {

        cy.get('input[id="twotabsearchtextbox"]')
        .type(tipoProduto)
        cy.get('span[id="nav-link-accountList-nav-line-1"]')
            .should('be.visible')
            .contains('Olá, faça seu login')



    }

SiteTelaInicial() {

cy.visit('/')


}


}



export default elementoPagina;