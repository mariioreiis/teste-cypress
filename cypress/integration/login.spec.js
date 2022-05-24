/// <reference types="Cypress" />
// Testes de Login

describe('Testes de Login', () => {

    beforeEach( function() {
        cy.visit('/')
      })

        // Teste está OK.
        it('Acessar o site e logar na conta', function() {
            cy.login()
        });
    
        // Travei na parte do preenchimento dos campos de senha, aparentemente o box que aparece está atrapalhando, preciso estudar sobre o elemento (me parece ser um ajax).
        it('Acessar o formulário e criar uma nova conta e após clicar em voltar', function() {
            cy.get('.btn-account')
            .should('be.visible')
            .click()

            cy.get(':nth-child(6) > .btn-reset')
            .should('be.visible')
            .click()

            cy.get('.justify-content-between > .btn')
            .should('be.visible')
            .click()

            cy.contains("h4", 'Login')
            .should('be.visible')
        });

        it.only('Criar uma nova conta no site', function(){
            cy.get('.btn-account')
            .should('be.visible')
            .click()

            cy.get(':nth-child(6) > .btn-reset')
            .should('be.visible')
            .click()

            cy.get('#id_username')
            .should('be.visible')
            .clear()
            .type(Cypress.env('user'))

            cy.get('#id_first_name')
            .should('be.visible')
            .clear()
            .type(Cypress.env('firstname'))

            cy.get('#id_last_name')
            .should('be.visible')
            .clear()
            .type(Cypress.env('lastname'))

            cy.get('#id_email')
            .should('be.visible')
            .clear()
            .type(Cypress.env('email'))


            cy.get('#id_password1')
            .should('be.visible')
            .clear()
            .type(Cypress.env('passwordnew'))

            cy.contains('script', 'Requerimentos da senha').check()

            cy.get('#id_password2')
            .should('be.visible')
            .clear()
            .type(Cypress.env('passwordnew'))

        })
        // Esse teste está OK, só preciso ver o funcionamento da estrutura de condições.
        it('Exportar dados do perfil de usuário', function() {
            type="application/javascript"
            cy.get('.cc-btn').click();
            cy.get('.btn-account').click();
            cy.get('#id_username').type('mario');
            cy.get('#id_password').type('Mario@12');
            cy.get('.btn-primary').click();
            cy.get(':nth-child(4) > .btn-account > .tile').click();
            cy.get('#user-263-header-dropdown-content > [href="/profile/mario-reis-263"]').click();
            cy.get(':nth-child(2) > .nav-link > strong').click();
            // caso haja arquivo criado executar esta linha
            cy.get('.list-group-item-body').click();
             //caso seja a criação do arquivo esta linha
            //cy.get('#lgpd-export-btn').click();    
        });

        // Início da edição das informações do perfil
        it('Alterar dados do perfil de usuário', function() {
            cy.get('.cc-btn').click();
            cy.get('.btn-account').click();
            cy.get('#id_username').type('mario');
            cy.get('#id_password').type('Mario@12');
            cy.get('.btn-primary').click();
            cy.get(':nth-child(4) > .btn-account > .tile').click();
            cy.get('#user-263-header-dropdown-content > [href="/profile/mario-reis-263"]').click();
            cy.get('.col > :nth-child(3) > .btn').click();
            

            cy.get('#id_company').type('Fábrica Digital');
            cy.get('#id_office').type('Analista');
            cy.get('#div_id_biography > .form-field > .fr-box > .fr-wrapper > .fr-element').type('Bioagrafia para teste automatizado');
            cy.get('#div_id_interest > .form-field > .fr-box > .fr-wrapper > .fr-element').type('Busca resultado para teste automatizado');
            cy.get('#div_id_how_can_collaborate > .form-field > .fr-box > .fr-wrapper > .fr-element').type('Como script para automatizar testes');
            cy.get('#div_id_hobbies > .form-field > .fr-box > .fr-wrapper > .fr-element').type('Testes automatizados');
            cy.get('#id_phone').type('11111111111');
            cy.get('#div_id_interest_area > .form-field > .fr-box > .fr-wrapper > .fr-element').type('blábláblá');
            //cy.get('.rended > .btn').click();
        });

});