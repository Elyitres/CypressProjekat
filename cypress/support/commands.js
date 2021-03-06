// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands"

Cypress.Commands.add('login', (username, password) => {
    
     cy.visit('https://github.com')
     cy.viewport(1024, 768)
     cy.get('.mr-3 > .HeaderMenu-link').click()
     cy.get('#login_field').type(username)
     cy.get('#password').type(password)
     cy.get('.btn').click()
     
    
})

Cypress.Commands.add('deleteRepository', () => {

    cy.get('[data-content="Settings"]').click()
    cy.get(':nth-child(4) > .details-reset > .boxed-action').click()
    cy.get('.Box-body > form > p > .form-control').type(Cypress.env('username')+'/'+Cypress.env('repositoryName'))
    cy.get('.Box-body > form > .btn-danger > .d-md-inline-block').click()
})
let LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
  })

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    })
  })
