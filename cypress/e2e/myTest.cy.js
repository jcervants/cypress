// sobrecargado tus kpis
// cuello de botellas, este proceso rinde mil atenciones, so

describe('My First Test', () => {
    it('Verificar titulo!', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    
    cy.get("[type='email']").type('fake@email.com').should('have.value','fake@email.com')
    //Verify that value has been updated
       }) 
  })

//   <input type="email" class="form-control action-email" id="email1" placeholder="Email">