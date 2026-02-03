Feature: Login inválido SauceDemo

Scenario: Login com credenciais invalidas
  Given que o usuário acessa a página de login do SauceDemo
  When realiza login com usuário "invalido"
  And clica no botão de login
  Then o sistema deve exibir uma mensagem de erro informando que as credenciais são inválidas

