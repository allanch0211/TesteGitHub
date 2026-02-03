Feature: Login bloqueado SauceDemo


Scenario: Login com usuário bloqueado

Given que o usuário acessa a página de login do SauceDemo
When informa o usuário bloqueado e senha de login
And clica no botão de login
Then o sistema deve exibir uma mensagem de erro informando que o usuario esta bloqueado