describe('HomePageTest', () => {
  beforeEach(() => {
    cy.visit('https://qamoviesapp.ccbp.tech/login')
    cy.get('#usernameInput').type('rahul') 
    cy.get('#passwordInput').type('rahul@2021')
    cy.get('.login-button').click()
    cy.url().should('eq', 'https://qamoviesapp.ccbp.tech/')
  })

  it('Test the Home Page', () => {
    cy.url().should('include', 'qamoviesapp.ccbp.tech')
  })

  it('Test the heading texts of each section', () => {
    cy.contains('Trending Now', {timeout:10000}).should('be.visible')
    cy.contains('Originals', {timeout:10000}).should('be.visible')
  })

  it('Test whether the play button is displayed or not', () => {
    cy.get('button').contains('Play', {timeout:10000}).should('be.visible')
  })

  it('Test whether the Movies are displayed, in the corresponding movies sections', () => {
    cy.get('.poster', {timeout:10000}).first().should('be.visible').click()
    cy.url().should('include', '/movies/')
  })

  it('Test the Contact Us Section', () => {
    cy.contains('Contact Us', {timeout:10000}).should('be.visible')
  })
})
