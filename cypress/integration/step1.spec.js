describe('Testes', () => {

        // Teste está OK.
        it.skip('Acessar o site e logar na conta', () => {
            cy.visit('https://coalizao.hml.fabricadigital.com.br');
            cy.get('.cc-btn').click();
            cy.get('.btn-account').click();
            cy.get('#id_username').type('mario');
            cy.get('#id_password').type('Mario@12');
            cy.get('.btn-primary').click();
        });
    
        // Travei na parte do preenchimento dos campos de senha, aparentemente o box que aparece está atrapalhando, preciso estudar sobre o elemento (me parece ser um ajax).
        it.skip('Acessar o site e criar uma nova conta', () => {
            cy.visit('https://coalizao.hml.fabricadigital.com.br');
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
            it('Exportar dados do perfil de usuário', () => {
                cy.visit('https://coalizao.hml.fabricadigital.com.br');
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

});