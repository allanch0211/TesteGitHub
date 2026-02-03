Feature: Login no SauceDemo



Scenario: Login com credenciais válidas

Given que o usuário acessa a página de login do SauceDemo
When o usuário informa um nome de usuário e senha válidos
And clica no botão de login
Then o usuário deve ser autenticado com sucesso