Cypress.Commands.add('loginComUsuario', (tipo) => {

  const usuarios = {
    valido: {
      user: "standard_user",
      pass: "secret_sauce",
    },
    invalido: {
      user: "Allan",
      pass: "Christian",
    },
    bloqueado: {
      user: "locked_out_user",
      pass: "secret_sauce",
    },
  };

  const dados = usuarios[tipo];

  cy.login(dados.user, dados.pass);

});
