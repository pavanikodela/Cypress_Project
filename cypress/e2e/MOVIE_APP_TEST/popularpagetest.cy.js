describe('PopularPageTest', () => {
  beforeEach(() => {
    cy.visit('https://qamoviesapp.ccbp.tech/login')
    cy.get('#usernameInput').type('rahul')
    cy.get('#passwordInput').type('rahul@2021')
    cy.get('.login-button').click()
    cy.url().should('include', '/')
  })

  it('Test the Popular Page UI', () => {
    cy.contains('Popular').should('be.visible').click()
    cy.url().should('include', '/popular')

  })

  it('Test whether the movies are displayed', () => {
    cy.contains('Popular').click()
    cy.get('.movie-icon-item').should('exist').and('be.visible')
  })
})
