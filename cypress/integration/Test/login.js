describe('Test logging in user feature on github', () => {
    it('logs in and checks whether user is successfully logged in', () => {
        cy.visit('https://github.com')
        cy.viewport(1024, 768)
        cy.get('.mr-3 > .HeaderMenu-link').click()
        cy.url().should('be.equal', 'https://github.com/login')
        cy.get('#login_field').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('.btn').click()
        cy.get('.mr-0.d-none > .details-overlay > .Header-link').click()
        cy.get('.dropdown-menu-sw > :nth-child(1) > .no-underline > .css-truncate-target').should('have.text','Cypress0503')
        
    })
})