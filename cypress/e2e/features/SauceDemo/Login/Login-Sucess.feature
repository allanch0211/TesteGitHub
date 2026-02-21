Feature: Login no SauceDemo

Scenario: Login com credenciais validas
  Given que o usuário acessa a página de login do SauceDemo
  When realiza login com usuário "valido"
  And clica no botão de login
  Then o usuário deve ser autenticado com sucesso
