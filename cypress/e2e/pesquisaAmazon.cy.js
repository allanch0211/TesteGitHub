import AssertInformation from '../support/pages/validações'
import ElementoPagina from '../support/pages/elementoPagina'
import cliques from '../support/pages/botaoClique'



var assert = new AssertInformation ()
var elemento = new ElementoPagina ()
var clique = new cliques ()

describe('Pesquisa barra de pesquisa tela inicial', () => {

    context('Pesquisar produto válido (POSITIVO)', () => {

        it('acesso a tela inicial para pesquisar um produto', () => {
            elemento.SiteTelaInicial()
            assert.VerificacaoDaTelaInicial()
        })

        it('realizo a pesquisa do produto na barra de pesquisa', () => {
            elemento.PesquisaBarraDePesquia('Iphone 15')
            clique.clicoParaPesquisar()
        })

        it('o sistema me fornece a pesquisa conforme esperado', () => {
        assert.PesquisaDoProduto('Iphone 15')

        })

        it('verifico o produto da minha escolha', () => {
            assert.VerificacaoDoProduto('Apple iPhone 15 (128 GB) — Azul')
        })

    })

})

            
            


            



            






        
