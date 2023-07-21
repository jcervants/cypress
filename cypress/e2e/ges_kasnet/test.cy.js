Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Recargas Kasnet", () => {
    before('Login',() => {cy.login_comercial()})

    it.only("Solic. Recargas Kasnet", () => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=kasnet&sub_sec_id=solicitud")
        //cy.visit("https://gestion.apuestatotal.dev/?sec_id=kasnet&sub_sec_id=solicitud_detalle&id=1")
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
        })
  
        cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })

    it("Valid. Recargas Kasnet", () => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=kasnet&sub_sec_id=validacion_solicitud")
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
        })
  
        cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })

    it("Produc solicitud", () => {
        cy.visit("https://gestion.apuestatotal.com/?sec_id=kasnet&sub_sec_id=solicitud")
        //cy.visit("https://gestion.apuestatotal.dev/?sec_id=kasnet&sub_sec_id=solicitud_detalle&id=1")
        cy.window().then((newWin) => {
        cy.get('#save_location_btn').click()
        })
  
        cy.wait(1000)
        cy.window().then((newWin) => {
         cy.get('.confirm').click()
        })
    })
})
