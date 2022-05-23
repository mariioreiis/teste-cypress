// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', function() {
    cy.get('.btn-account > .tile').should('be.visible').click()
    cy.get('#id_username').type(Cypress.env('user')).should('not.have.value')
    cy.get('#id_password').type(Cypress.env('password'), {log:false}).should('not.have.value')
    cy.get('.btn-primary').click()
    //cy.get('.mt-2').should('be.visible')
    cy.get('.nav-item').should('be.visible')


})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
