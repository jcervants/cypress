Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("A practice with cypres", () => {    
    before('Login',() => {
       // cy.login()
    })

    it("Provision Conta",() => {
        cy.visit("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=contabilidadProvisiones")
        cy.log('add 3 todos')
        cy.contains('Obtener provisiones').click()
        //cy.contains('Exportar a excel').click()
    })

    it("Interbank",() => {
        cy.visit("https://bancaporinternet.interbank.pe/login")
        cy.get('#46').click()
        cy.contains('2').click()
        // cy.log('add 3 todos')
        // cy.contains('Obtener provisiones').click()
        //cy.contains('Exportar a excel').click()
    })
})  