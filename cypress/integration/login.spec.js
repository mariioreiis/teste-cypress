// Testes de Login

describe('Testes de Login', () => {

        // Teste está OK.
        it.only('Acessar o site e logar na conta', () => {
            cy.visit('/');
            cy.get('.btn-account').click();
            cy.get('.tile').click();
            Cypress.env('login_user')
            Cypress.env('login_user')
           // cypress.env('login_user');
            //cypress.env('login_password');
           // cy.get('#id_username').type('mario');
           // cy.get('#id_password').type('Mario@12');
            cy.get('.btn-primary').click();
        });
    
        // Travei na parte do preenchimento dos campos de senha, aparentemente o box que aparece está atrapalhando, preciso estudar sobre o elemento (me parece ser um ajax).
        it.skip('Acessar o site e criar uma nova conta', () => {
            cy.visit('/');
            cy.get('.cc-btn').click();
            cy.get('.btn-account').click();
            cy.get(':nth-child(6) > .btn-reset').click();
            cy.get('#id_username').type('marioreis');
            cy.get('#id_first_name').type('Mario');
            cy.get('#id_last_name').type('marioreis');
            cy.get('#id_email').type('marioreis@123456.com');
            cy.get('#id_password1').type('Lalalala12');
            cy.get('#id_password2').type('Lalalala12');
            cy.get('.disclaimer-modal-link').click();
            //cy.get('#id_disclaimer').click();
            // cy.get('#id_recaptcha').check();
        });

        // Esse teste está OK, só preciso ver o funcionamento da estrutura de condições.
        it.skip('Exportar dados do perfil de usuário', () => {
            cy.visit('/');
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
        it.skip('Alterar dados do perfil de usuário', () => {
            cy.visit('/');
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