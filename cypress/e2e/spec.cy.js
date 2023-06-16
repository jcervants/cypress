Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// describe("home page", () => {
//   it("the h1 contains the correct text", () => {
//     cy.visit("http://localhost:8000/tickets")
//     cy.contains('prueba').click()
//    // cy.get('[placeholder="titulo"]').type('kurax')
//     cy.get('#contenido').type('tickets')
//     cy.contains('ublicar').click()
//     //  cy.get('esto es una prueba2').click()
//   })
// })
describe("A practice with cypres", () => {

it("Login",() => {
    cy.visit("https://gestion.apuestatotal.dev/")   
       cy.get('#username').type('jesus.cervantes')
       cy.get('#password').type('Kurax2023$$')
       cy.get('form').submit()

       cy.get(window).then((newWin) => {
        cy.wait(2000)
        cy.wrap(newWin).get('#save_location_btn').click()
       })
      })

    it("Usuarios",() => {
      cy.visit("https://gestion.apuestatotal.dev/?sec_id=usuarios&sub_sec_id=usuarios")   
         cy.get('#txtSearchUser').type('jesus.cervantes')
         cy.wait(2000)
          cy.get('.btn btn-rounded btn-default btn-sm btn-edit').click()
  
         
      })
    })

      //  cy.window().then((win) => {
      //   cy.window().should('have.length', 2) // Ensure there are two windows open (the original and the new one)
      //   cy.window().then((newWin) => {
      //     cy.wait(2000)
      //     cy.wrap(newWin).get('button').click()
      //   })
      // })
//       cy.get('.nav-item').contains('Recaudacion').click()
   