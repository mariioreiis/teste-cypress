
// Testes de conteúdo do site

describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('https://coalizao.hml.fabricadigital.com.br')
    })
            // Teste de avalização com o usuário logado.
            it.skip('Executar uma avaliação logado', () => {
                cy.get('.cc-btn').click();
                cy.get('.btn-account').click();
                cy.get('#id_username').type('mario');
                cy.get('#id_password').type('Mario@12');
                cy.get('.btn-primary').click();
                cy.get('#navbar-46 > .mr-1').click();
                cy.get('#navbar-24 > .mr-1').click();
                cy.get('[aria-labelledby="navbar-46"] > :nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
                cy.get(':nth-child(5) > .fal').click();
            });

            // Teste de avalização deslogado.
            it('Realizar uma avaliação deslogado', () => {
                cy.get('.cc-btn').click();
                cy.get('#navbar-46 > .mr-1').click();
                cy.get('#navbar-24 > .mr-1').click();
                cy.get('[aria-labelledby="navbar-46"] > :nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
                cy.get('.rate-select-layer > :nth-child(4) > .fa').click();
                //cy.get(':nth-child(5) > .fal').click();
            });

});