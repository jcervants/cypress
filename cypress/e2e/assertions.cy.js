it("Implicit assertions", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should('include', 'orangehrmlive')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orange') 

    cy.get('.orangehrm-login-branding > img').should('be.visible')
     .and('exist')

    cy.get("input[placeholder='Username']").type('Admin') //value into inputtext
    cy.get("input[placeholder='Username']").should('have.value','Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()
})