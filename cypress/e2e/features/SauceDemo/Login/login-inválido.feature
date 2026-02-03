Feature: Login inválido SauceDemo


Scenario: Login com credenciais inválida


Given que o usuário acessa a página de login do SauceDemo
When o usuário informa um nome de usuário e senha inválidos
And clica no botão de login
Then o sistema deve exibir uma mensagem de erro informando que as credenciais são inválidas
