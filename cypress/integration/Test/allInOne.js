Cypress.Cookies.debug(true)
describe('github tests', () => {
    before('logs in and checks whether user is successfully logged in', () => {
      cy.visit('https://github.com/')
      cy.viewport(1024, 768)
      cy.get('.mr-3 > .HeaderMenu-link').click()
      cy.url().should('be.equal', 'https://github.com/login')
      cy.get('#login_field').type(Cypress.env('username'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('.btn').click()
      cy.get('.mr-0.d-none > .details-overlay > .Header-link').click()
      cy.get('.dropdown-menu-sw > :nth-child(1) > .no-underline > .css-truncate-target').should('have.text', Cypress.env('username'))
      cy.reload()     
      
      })
      
      beforeEach(() => {
        cy.getCookies('user_session')
        Cypress.Cookies.preserveOnce('user_session')
        cy.restoreLocalStorage()
      })

      afterEach(() => {
        cy.getCookie('user_session')
        Cypress.Cookies.preserveOnce('user_session')
        cy.saveLocalStorage()
      })

      after(()=> {
        cy.deleteRepository()
      })
        
    
    
    it('creates new repository and checks if repository has been created', () => {  
        cy.get(':nth-child(6) > .details-overlay > .Header-link > .dropdown-caret').click()
        cy.get('.dropdown-menu > [href="/new"]').click() 
        cy.url().should('be.equal', 'https://github.com/new')
        cy.get('#repository_name').type(Cypress.env('repositoryName'))
        cy.get('#repository_description').type(Cypress.env('description'))
        cy.get('#repository_visibility_private').click()
        cy.get('#repository_auto_init').click()
        cy.get('.btn-primary').click()
        cy.get('.markdown-body > h1')
            .should('be.visible')
            .should('have.text', Cypress.env('repositoryName'))      
    
        })

    it('creates an issue and checks whether it is present along with selected labels', () => {                     
        cy.get('#issues-tab').click()
        cy.get('.ml-3 > .btn').click()            
        cy.get('#issue_title').type('This is a test')
        cy.get('.css-truncate > .btn-link').click()
        cy.get('#labels-select-menu > .text-bold').click()
        cy.get(':nth-child(1) > .select-menu-item-text > :nth-child(3) > .css-truncate').click()
        cy.get(':nth-child(2) > .select-menu-item-text > :nth-child(3) > .css-truncate').click()
        cy.get('#labels-select-menu > .text-bold').click()
        cy.get('.flex-justify-end > .btn-primary').click().debug()

        cy.get('div[id^=issue]').first()
              .should('include.text','This is a test')
              .should('include.text', 'bug')
              .and('include.text', 'documentation')
                  
        })




})