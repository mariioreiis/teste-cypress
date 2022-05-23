/// <reference types="Cypress" />

describe('Testes de Conteúdo', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })        
        // Teste de avalização com o usuário logado.
            it.only('Executar uma avaliação logado', () => {
                cy.login()
            });

            // Teste de avalização deslogado.
            it('Realizar uma avaliação deslogado', () => {
                cy.visit('/');
                cy.get('.cc-btn').click();
                cy.get('#navbar-46 > .mr-1').click();
                cy.get('#navbar-24 > .mr-1').click();
                cy.get('[aria-labelledby="navbar-46"] > :nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
                cy.get('.rate-select-layer > :nth-child(3) > .fa').click();
                //cy.get('.rate-select-layer > :nth-child(4) > .fa').click();
                //cy.get(':nth-child(5) > .fal').click();
            });

});
