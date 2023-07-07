Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("A practice with cypres", () => {
before('Smoke Test Login',() => {
    cy.login()
  })
       

  it.only("Usuarios",() => {
      cy.visit("https://gestion.apuestatotal.dev/?sec_id=usuarios&sub_sec_id=usuarios")   
         cy.get('#txtSearchUser').type('jesus.cervantes')
         cy.wait(5000)
          cy.get('.btn btn-rounded btn-default btn-sm btn-edit').click()       
  })

  it("Caja ",() => {
       cy.visit("https://gestion.apuestatotal.dev/?&sec_id=caja") 
  })
  
  it("Boveda jefe comercial",() => {
      cy.get('#navbar > ul > .dropdown').click()     
      cy.get('#navbar > ul > .dropdown > ul > li:nth-child(2) > a').click()
      cy.get('#username').type('jefecomercialtest.uno')
      cy.get('#password').type('5e9a21729e')
      cy.get('form').submit()
      cy.visit("https://gestion.apuestatotal.dev/?sec_id=prestamo&sub_sec_id=boveda")     
  }) 

  it("Usuario Tesoreria",() => {
      cy.get('#navbar > ul > .dropdown').click()     
      cy.get('#navbar > ul > .dropdown > ul > li:nth-child(2) > a').click()
      cy.get('#username').type('tesoreria.mepa')
      cy.get('#password').type('123456')
      cy.get('form').submit()
      cy.visit("https://gestion.apuestatotal.dev/?sec_id=prestamo&sub_sec_id=tesoreria")     
         
  })

  it.only("Boveda supervisor",() => {
    // cy.get('#navbar > ul > .dropdown').click()     
    // cy.get('#navbar > ul > .dropdown > ul > li:nth-child(2) > a').click()
    cy.visit("https://gestion.apuestatotal.dev/?sec_id=prestamo&sub_sec_id=boveda") 
    cy.get('#username').type('supervisoruno.test')
    cy.get('#password').type('123456')  
    cy.get('form').submit()

    cy.get(window).then((newWin) => {
      cy.wrap(newWin).get('#save_location_btn').click()
    })
      cy.wait(1000)

    cy.get(window).then((newWin) => {
      cy.wrap(newWin).get('.confirm').click()
    })

    cy.get('#sec_prestamo_boveda_btn_nuevo').click()

    //Red Sportbars y pago premios
    cy.get('#select2-form_modal_sec_prestamo_boveda_param_tipo_tienda-container').click()
    cy.get('.select2-results__option:nth-child(2)').click()

    cy.get('#select2-form_modal_sec_prestamo_boveda_param_local-container').click()
    //cy.get('.select2-selection__rendered input').type('Your text goes here'); // Type into the input field
    cy.get('.select2-results__option:nth-child(2)').click()
     
    cy.get('#select2-form_modal_sec_prestamo_boveda_param_tipo_prestamo-container').click()
    cy.get('.select2-results__option:nth-child(2)').click()
     
    //CHECK asignar cajero
    cy.get('#form_modal_sec_prestamo_boveda_param_asignar_cajero').click()

    //seleccionar
    cy.get('#select2-form_modal_sec_prestamo_boveda_param_cajero-container').click()
    cy.get('.select2-results__option:nth-child(2)').click()

    cy.get('#form_modal_sec_prestamo_boveda_param_monto').type('xx7000')
    cy.get('#sec_prestamo_boveda_modal_btn_nuevo_prestamo').click()

    cy.wait(1000)

    cy.get(window).then((newWin) => {
      cy.wrap(newWin).get('.confirm').click()
    })

    // .click()      
      // .invoke('attr', 'href')
      // .then(href => {
      //   cy.visit(href);s
      // });      <span class="select2-selection__rendered" id="select2-form_modal_sec_prestamo_boveda_param_tipo_tienda-container" title="-- Seleccione --">-- Seleccione --</span>
   })
})
 //git rama erick: dev-prestamos-boveda

        
