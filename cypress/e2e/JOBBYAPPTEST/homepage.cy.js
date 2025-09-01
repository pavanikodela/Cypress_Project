Cypress.on('uncaught:exception', () => false )

describe('HomePageTest', () => {

  beforeEach(() => {
    
    cy.visit('https://qajobbyapp.ccbp.tech/login')

    cy.get('#userNameInput').type('rahul')
    cy.get('#passwordInput').type('rahul@2021')
    cy.get('button[type="submit"]').click()

   
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/')
  })

  it('Verify Homepage Heading and Description text', () => {
   
    cy.contains('h1', 'Find The Job That Fits Your Life', { timeout: 10000 }).should('be.visible')
    cy.contains('p', 'Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.', { timeout: 10000 })
      .should('be.visible')
  })  

  it('Verify Find Jobs button functionality', () => {
    cy.contains('button', 'Find Jobs', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/jobs')
  })

})