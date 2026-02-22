import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import AssertInformation from '../../pages/Amazon/validações/SearchAssertions'
import ElementoPagina from '../../pages/Amazon/elementoPagina/SearchActions'
import cliques from '../../pages/Amazon/botaoClique/SearchPage'

const assert = new AssertInformation ()
const elemento = new ElementoPagina ()
const clique = new cliques ()



Given("que o usuário acessa o site da Amazon", () => {

elemento.SiteTelaInicial()
assert.VerificacaoDaTelaInicial()

});

When("ele pesquisa por Iphone 15", () => {


elemento.PesquisaBarraDePesquia('Iphone 15')
clique.clicoParaPesquisar()

assert.PesquisaDoProduto('Iphone 15')


});

Then("os resultados da busca devem ser exibidos", () => {

    assert.PesquisaDoProduto('Iphone 15')

});
