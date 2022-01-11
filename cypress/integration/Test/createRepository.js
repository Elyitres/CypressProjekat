describe('Test repository create feature on github',() => {
    it('creates new repository, checks if repository is created, and deletes it at the end', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'))   
    cy.get(':nth-child(6) > .details-overlay > .Header-link > .dropdown-caret').click()
    cy.get('.dropdown-menu > [href="/new"]').click()
    cy.url().should('be.equal', 'https://github.com/new')
    cy.get('#repository_name').type(Cypress.env('repositoryName'))
    cy.get('#repository_description').type('This is a description')
    cy.get('#repository_visibility_private').click()
    cy.get('#repository_auto_init').click()
    cy.get('.btn-primary').click()
    cy.get('.markdown-body > h1')
        .should('be.visible')
        .should('have.text', Cypress.env('repositoryName'))
    
    cy.deleteRepository()

    })

})