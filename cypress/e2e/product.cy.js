Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe("products", () => {
    it("ultron",() =>{
  //      cy.login_ultron()
       // cy.visit("https://www.deltron.com.pe/modulos/productos/items/postsql.php?")
        cy.visit("https://loginunico.viabcp.com/#/tarjeta-sesion")

        
    })
  })