Feature: Login inválido SauceDemo

Scenario: Login com credenciais invalidas
  Given que o usuário acessa a página de login do SauceDemo
  When realiza login com usuário "invalido"
  And clica no botão de login
  Then deve exibir erro de credenciais inválidas

