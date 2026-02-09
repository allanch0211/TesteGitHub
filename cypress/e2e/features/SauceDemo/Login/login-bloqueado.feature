Feature: Login bloqueado SauceDemo

Scenario: Login com usuario bloqueado
  Given que o usuário acessa a página de login do SauceDemo
  When realiza login com usuário "bloqueado"
  And clica no botão de login
  Then deve exibir erro de usuário bloqueado
