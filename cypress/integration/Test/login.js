describe('Test log in on github', () => {
    it('log in', () => {
        cy.visit('https://github.com')
        cy.viewport(1024, 768)
        cy.get('.mr-3 > .HeaderMenu-link').click()
        cy.url()
          .should('be.equal', 'https://github.com/login')
        cy.get('#login_field').type('Cypress0503')
        cy.get('#password').type('Test123github')
        cy.get('.btn').click()
        cy.get('.mr-0.d-none > .details-overlay > .Header-link').click()
        cy.get('.dropdown-menu-sw > :nth-child(1) > .no-underline > .css-truncate-target').should('have.text','Cypress0503')
        
    })
})