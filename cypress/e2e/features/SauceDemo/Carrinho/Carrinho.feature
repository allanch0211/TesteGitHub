Feature: Exibir produto do carrinho no SauceDemo

  Scenario: Exibir produto no carrinho
    Given que o usuário está autenticado
    And possui um produto adicionado ao carrinho
    When acessa o carrinho 
    Then o sistema deve exibir o carrinho com o produto adicionado

