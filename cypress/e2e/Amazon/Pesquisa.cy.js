import AssertInformation from '../support/pages/Amazon/validações'
import ElementoPagina from '../support/pages/Amazon/elementoPagina'
import cliques from '../support/pages/Amazon/botaoClique'



var assert = new AssertInformation ()
var elemento = new ElementoPagina ()
var clique = new cliques ()

describe('Pesquisa barra de pesquisa tela inicial', () => {

    context('Pesquisar produto válido (POSITIVO)', () => {

        it('deve pesquisar produto com sucesso', () => {
elemento.SiteTelaInicial()
assert.VerificacaoDaTelaInicial()

elemento.PesquisaBarraDePesquisa('Iphone 15')
clique.clicoParaPesquisar()

assert.PesquisaDoProduto('Iphone 15')
assert.VerificacaoDoProduto('Apple iPhone 15 (128 GB) – Azul')
})

    })

})

