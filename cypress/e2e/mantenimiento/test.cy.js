Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
    //     cy.visit('https://example.cypress.io')
    //     cy.contains('type').click()
    //     Should be on a new URL which
    // includes '/commands/actions'
    // cy.url().should('include', '/commands/actions')

describe("Serv. Técnico", () => {
  before('Login',() => {
    cy.login()
  })

  it("Solicitud Mantenimiento",() => {
    cy.visit("https://gestion.apuestatotal.dev/?sec_id=servicio_tecnico_atencion&sub_sec_id=")   
    // cy.window().then((newWin) => {
    //   cy.get('#save_location_btn').click()
    // })

    // cy.wait(1000)
    
    // cy.window().then((newWin) => {
    //   cy.get('.confirm').click()
    // })

    // cy.get("#select2-zona_id-container").click()
    // cy.get(".select2-search__field").type("Centro 2").type("{enter}")
    
    // cy.get("#select2-local_id-container").click()
    // cy.get(".select2-search__field").type("Calle Lima").type("{enter}")
    
    // cy.get("#select2-sistema_id-container").click()
    // cy.get(".select2-search__field").type("CCTV").type("{enter}")

    // cy.get("#reporte").type("Pitido constante en grabador")
    // cy.wait(1000)
    // cy.get("[type='file']").selectFile('C:/Users/Jonathan C/Pictures/firm.png')
    // cy.get("[data-button='save']").click()
      //  cy.get('#txtSearchUser').type('jesus.cervantes')
      //  cy.wait(5000)
      //   cy.get('.btn btn-rounded btn-default btn-sm btn-edit').click()       
  })

  it.only("Atención Observaciones",() => {
    cy.visit("https://gestion.apuestatotal.dev/?sec_id=servicio_tecnico_observado&sub_sec_id=")   
  
    // cy.window().then((newWin) => {
    //   cy.get('#save_location_btn').click()
    // })

    // cy.wait(1000)
    // //*[@id="200115"]/td[11]/a  
    // cy.window().then((newWin) => {
    //   cy.get('.confirm').click()
    // })

    // cy.get('#estado').click()
    // cy.get('#equipo_id').click()
    // cy.get('#motivo_observado').click()
  })

  it("Atención mantenimiento",() => {
    cy.visit("https://gestion.apuestatotal.dev/?sec_id=solicitud_mantenimiento&sub_sec_id=")   
    cy.window().then((newWin) => {
      cy.get('#save_location_btn').click()
    })

    cy.wait(1000)
    
    cy.window().then((newWin) => {
      cy.get('.confirm').click()
    })

    cy.get("#select2-zona_id-container").click()
    cy.get(".select2-search__field").type("Centro 2").type("{enter}")
    
    cy.get("#select2-local_id-container").click()
    cy.get(".select2-search__field").type("Calle Lima").type("{enter}")
    
    cy.get("#select2-sistema_id-container").click()
    cy.get(".select2-search__field").type("CCTV").type("{enter}")

    cy.get("#reporte").type("Pitido constante en grabador")
    cy.wait(1000)
    cy.get("[type='file']").selectFile('C:/Users/Jonathan C/Pictures/firm.png')

    // cy.get("[data-button='save']").click()
      //  cy.get('#txtSearchUser').type('jesus.cervantes')
      //  cy.wait(5000)
      //   cy.get('.btn btn-rounded btn-default btn-sm btn-edit').click()       
  })


})
