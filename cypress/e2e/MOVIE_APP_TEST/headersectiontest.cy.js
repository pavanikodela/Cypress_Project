describe('HeaderSectionTest', () => {
  beforeEach(() => {
    cy.visit('https://qamoviesapp.ccbp.tech/login')

    cy.get('#usernameInput').type('rahul')
    cy.get('#passwordInput').type('rahul@2021')
    cy.get('button').contains('Login').click()
    cy.url().should('eq', 'https://qamoviesapp.ccbp.tech/')
  })

  it('Test whether the Website logo is displayed', () => {
    cy.get('img[alt="website logo"]').should('be.visible')
  })

  it('Test the Navbar elements', () => {
    cy.contains('Home').should('be.visible')
    cy.contains('Popular').should('be.visible')
    cy.get('.avatar-button').should('be.visible')
  })

  it('Test the navigation to the Home and Popular pages', () => {
    cy.contains('Home').click()
    cy.url().should('eq', 'https://qamoviesapp.ccbp.tech/')

    cy.contains('Popular').click()
    cy.url().should('include', '/popular')
  })

  it('Test the navigation to the Account page', () => {
    cy.get('.avatar-img').click()
    cy.url().should('include', '/account')
  })
})
