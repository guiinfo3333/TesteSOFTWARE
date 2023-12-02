import chai from 'chai';
const expect = chai.expect;

export class PageObjectOPovo {
    constructor() {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    }
  
    realizarBusca() {
      cy.visit('https://www.opovo.com.br/');
      cy.get('.icon-busca').click();
      cy.wait(5000);
      cy.get('#busca').type('UFC').type('{enter}');
      cy.get('.listagem_news')
      .children('.caixa-listagem')
      .should(($listagem) => {
        expect($listagem).to.have.length.greaterThan(2);
      });
    }
  
    aplicarFiltroNaBusca() {
      cy.visit('https://www.opovo.com.br/');
      cy.get('.icon-busca').should('be.visible').click();
      cy.wait(5000);
      cy.get('#busca').should('be.visible').type('UFC').type('{enter}');
      cy.get('.listagem_news').should('be.visible')
      .children('.caixa-listagem')
      .should(($listagem) => {
        expect($listagem).to.have.length.greaterThan(2);
      });
      cy.get('.styledSelect').should('be.visible').click();
      cy.get('[rel="last_week"]').should('be.visible').click();
      cy.get('.listagem_news').should('be.visible')
        .children('.caixa-listagem')
        .should('have.length.greaterThan', 0);
    }
  
    visitarPaginaEsportes() {
      cy.viewport(1500, 1200);
      cy.visit('https://www.opovo.com.br/', {
        headers: {
          "Accept": "application/json, text/plain, */*",
          "User-Agent": "axios/0.18.0"
        }
      });
  
      cy.window().then((win) => {
        this.recursiveWait(win);
        cy.wait(3000);
        cy.get('#item-esportes > :nth-child(1)').click();
        this.recursiveWait(win);
        cy.once("fail", (err) => {
          return false;
        }).then(() => {
          cy.get('.owl-stage > :nth-child(1) > li > a').click();
          cy.wait(3000);
        });
      });
    }
  
    consultarAutorUltimaNoticiaCarnaval() {
      cy.visit('https://www.opovo.com.br/');
      cy.wait(5000);
      cy.get('.icon-busca').should('be.visible').click();
      cy.wait(5000);
      cy.get('#busca').should('be.visible').type('Carnaval').type('{enter}');
      cy.wait(5000);
  
      cy.get('#listagem > div:nth-child(1) > h2 > a')
        .should('be.visible')
        .should('have.attr', 'href');
  
      cy.get(':nth-child(1) > h2 > a > .txt-materia-listagem > .tempo-categoria-listagem > .ml-2')
        .should(($element) => {
          expect($element.text().trim()).to.not.be.empty;
          expect($element.text().trim()).to.contain('Por');
        });
    }
  
    recursiveWait(win) {
      if (win.googletag != undefined || win.googletag != null) {
        return;
      } else {
        cy.wait(5000);
        return this.recursiveWait(win);
      }
    }
  }