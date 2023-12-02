import {PageObjectOPovo} from  "./classes/Pageobject-OPovo"

const testePovoOnline = new PageObjectOPovo();

describe('Teste do Povo Online', () => {
  it('Realizar busca', () => {
    testePovoOnline.realizarBusca();
  });

  it('Aplicar filtro no resultado da busca', () => {
    testePovoOnline.aplicarFiltroNaBusca();
  });

  it.skip('Visitar página de um dos cadernos de Esportes', () => {
    testePovoOnline.visitarPaginaEsportes();
  });

  it('Consultar autor(a) da última notícia de Carnaval', () => {
    testePovoOnline.consultarAutorUltimaNoticiaCarnaval();
  });
});