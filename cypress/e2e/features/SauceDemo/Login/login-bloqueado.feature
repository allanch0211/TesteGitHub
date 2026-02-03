Feature: Login bloqueado SauceDemo

Scenario: Login com usuário bloqueado
  Given que o usuário acessa a página de login do SauceDemo
  When realiza login com usuário "bloqueado"
  And clica no botão de login
  Then o sistema deve exibir uma mensagem de erro informando que o usuario esta bloqueado
