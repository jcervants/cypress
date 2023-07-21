Cypress.Commands.add('login', () => {
    cy.viewport(1600, 1080)

    cy.visit("https://gestion.apuestatotal.dev/")
    cy.get('#username').type('jesus.cervantes')
    cy.get('#password').type('Kurax2023$$')
    cy.get('form').submit()
})


Cypress.Commands.add('login_prod', () => {
    cy.viewport(1600, 1080)

    cy.visit("https://gestion.apuestatotal.com/")
    cy.get('#username').type('jesus.cervantes')
    cy.get('#password').type('Kurax2023$$')
    cy.get('form').submit()
})

Cypress.Commands.add('login_sup', () => {
    cy.visit("https://gestion.apuestatotal.dev/")
    cy.get('#username').type('jesus.cervantes')
    cy.get('#password').type('Kurax2023$$')
    cy.get('form').submit()

})

Cypress.Commands.add('login_comercial', () => {
    cy.visit("https://gestion.apuestatotal.dev/")
    cy.get('#username').type('jefecomercialuno.test')
    cy.get('#password').type('123456')
    cy.get('form').submit()

})

Cypress.Commands.add('login_finanzas', () => {
    cy.visit("https://gestion.apuestatotal.dev/")
    cy.get('#username').type('jefferson.vicharra')
    cy.get('#password').type('123456')
    cy.get('form').submit()

})



Cypress.Commands.add('login_ultron', () => {
    cy.viewport(1440, 1024)
    cy.url("https://www.deltron.com.pe/login.php?")
    cy.window().then((newWin) => {
        cy.contains('Acceder').click()
    })
  
    cy.wait(1000)

})



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