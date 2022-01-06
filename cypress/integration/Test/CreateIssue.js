describe('Test create issue feature on github', () => {
    it('creates an issue and checks whether it is present along with selected labels', () => {
        cy.login(Cypress.env('username'), Cypress.env('password')) 
        cy.visit('https://github.com/Cypress0503/ffff')
        cy.get('#issues-tab').click()
        cy.get('.ml-3 > .btn').click()
        cy.get('#issue_title').type('This is a test')
        cy.get('.css-truncate > .btn-link').click()
        cy.get('#labels-select-menu > .text-bold').click()
        cy.get(':nth-child(1) > .select-menu-item-text > :nth-child(3) > .css-truncate').click()
        cy.get(':nth-child(2) > .select-menu-item-text > :nth-child(3) > .css-truncate').click()
        cy.get('#labels-select-menu > .text-bold').click()
        cy.get('.flex-justify-end > .btn-primary').click()
        cy.visit('https://github.com/Cypress0503/ffff/issues')
        cy.get('div[id^=issue]').first()
              .should('include.text','This is a test')
              .should('include.text', 'bug')
              .and('include.text', 'documentation')
              
    })

    it('closes an opened issue', () => {
        cy.get('.mr-3 > input').click()
        cy.get('[data-url$="Factions_content"] > .select-menu-button').click()
        cy.get('[value="closed"] > .select-menu-item-text').click()                


    })
})