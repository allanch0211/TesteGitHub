Feature: Checkout válido do usuário no SauceDemo


Scenario: Checkout válido do usuário

Given que o usuário está autenticado
And possui um produto no carrinho
When informa dados pessoais obrigatórios válidos
And confirma a finalização da compra
Then o pedido deve ser concluído com sucesso
