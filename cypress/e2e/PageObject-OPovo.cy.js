describe('Teste do Povo Online', () => {
  it.skip('Realizar busca', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('https://www.opovo.com.br/')
    cy.get('.icon-busca').click()
    cy.wait(5000)
    cy.get('#busca').type("UFC").type('{enter}');
    cy.get('.listagem_news')
    .children('.caixa-listagem') 
    .should('have.length.greaterThan', 2); 
  })

  it.skip('Aplicar filtro no resultado da busca', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('https://www.opovo.com.br/')
    cy.get('.icon-busca').should('be.visible').click()
    cy.wait(5000)
    cy.get('#busca').should('be.visible').type("UFC").type('{enter}');
    cy.get('.listagem_news').should('be.visible')
    .children('.caixa-listagem') 
    .should('have.length.greaterThan', 2); 
    cy.get('.styledSelect').should('be.visible').click()
    cy.get('[rel="last_week"]').should('be.visible').click()
    cy.get('.listagem_news').should('be.visible')
    .children('.caixa-listagem') 
    .should('have.length.greaterThan', 0); 
  })

  it.only('Visitar página de um dos cadernos de Esportes', () => {
    cy.viewport(1500, 1200);
    cy.once('uncaught:exception', () => false);
    cy.visit('https://www.opovo.com.br/')
    cy.get('#item-esportes > :nth-child(1)').click()
    cy.wait(10000000)
  })

})