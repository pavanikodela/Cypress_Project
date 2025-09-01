Cypress.on('uncaught:exception', () => false )

describe('HeaderSectionTest', () => {

  beforeEach(() => {
   
    cy.login('rahul', 'rahul@2021')

  
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/')
  })

  it('Verify App logo after successful login', () => {
    cy.get('img[alt="website logo"]', { timeout: 10000 }).filter(':visible').should('be.visible')
  })

  it('Navigate by clicking Navbar Jobs link', () => {
    cy.get('a[href="/jobs"]', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/jobs')
  })

  it('Navigate by clicking App logo', () => {
  
    cy.get('a[href="/jobs"]', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/jobs')

  
    cy.get('img[alt="website logo"]', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/')
  })

  it('Navigate by clicking Navbar Home link', () => {
    cy.get('a[href="/"]', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/')
  })

  it('Logout button functionality', () => {
    cy.contains('button', 'Logout', { timeout: 10000 }).filter(':visible').first().click()
    cy.url({ timeout: 10000 }).should('eq', 'https://qajobbyapp.ccbp.tech/login')
  })

})
