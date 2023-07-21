Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Módulo Contratos", () => {
    before('Login',() => {cy.login()})

    it.only("Provisiones Contabilidad", () => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=contabilidadProvisiones")       
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
    })
  
        cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })

    it.only("Prog. Pago Tesorería", () => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=contabilidadProvisiones")       
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
    })
  
    cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })


    it("Contratos Locales", () => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=locales")
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
        })
  
        cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })

})
