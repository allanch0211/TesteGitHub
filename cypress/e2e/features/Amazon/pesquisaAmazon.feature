Feature: Pesquisa na Amazon


Scenario: Buscar produto com sucesso

Given que o usuário acessa o site da Amazon
When ele pesquisa por Iphone 15
Then os resultados da busca devem ser exibidos