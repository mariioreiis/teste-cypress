/// <reference types="Cypress" />

describe('Testes de Conteúdo', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })        
        // Teste de avalização com o usuário logado.
            it('Executar uma avaliação logado', () => {
                cy.title().should('eq', 'Home | Morty - Testes')
                cy.get('.mt-2').should('be.visible')
            })
})