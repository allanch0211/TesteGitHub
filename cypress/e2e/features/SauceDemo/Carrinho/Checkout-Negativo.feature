Feature: Checkout inválido do usuário no SauceDemo


Scenario: Checkout inválido do usuário

Given que o usuário está autenticado
And possui um produto no carrinho
When não informa os dados pessoais obrigatórios
And tenta finalizar o pedido
Then o sistema deve exibir uma mensagem de erro e impedir a finalização do pedido

