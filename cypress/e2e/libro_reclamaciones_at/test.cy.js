Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

 describe("¡Libro de Reclamos!", () => {
    before('Login',() => {
     cy.visit("https://librodereclamaciones.apuestatotal.com/complaints")
    })

    it("llenar form", () => {
        cy.get("#name").type("prueba qa ignorar 5")
        cy.get("#direction").type("prueba qa ignorar 5")
        cy.get("#document").type("prueba qa ignorar 5")
        cy.get("#phone").type("prueba qa 5")
        cy.get("#email").type("jesus.cervantes@kurax.dev")
        cy.get("#email2").type("jesus.cervantes@kurax.dev")
        cy.get("#amount").type("500")
        cy.get("#description").type("prueba qa ignorar 5")
        
        //ZONA CENTRO 2
        cy.get("#select2-local_id-container").type("ANTUNE")
        cy.get('.select2-results__option:nth-child(1)').click()
        cy.get("#reference").type("prueba qa ignorar 5")

        cy.get("#detail").type("prueba qa ignorar 5")
        cy.get("#request").type("prueba qa ignorar 5")
        cy.get("#btnSend").click()
        // cy.wait(1000)
       
        // cy.get(window).then((newWin) => {
        //     cy.wrap(newWin).get('[type="button"]').contains("Confirmar").click({force: true})
        //  })
       
         
    })
})