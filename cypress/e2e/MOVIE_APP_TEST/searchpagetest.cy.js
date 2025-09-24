describe('SearchPageTest', () => {

  it('Navigate to login page',() => {
    cy.visit('https://qamoviesapp.ccbp.tech/login')
    cy.get('#usernameInput').type('rahul')
    cy.get('#passwordInput').type('rahul@2021')
    cy.get('.login-button').click()

    cy.get('.search-empty-button')  
      .should('be.visible')
      .click()
  })

  it('Test the Search Functionality', () => {
    cy.get('button[type="search"]').should('be.visible')
  })

  it('Test the Search functionality by searching with some movie names and the count of movies displayed', () => {
    cy.get('button[type="search"]').type('Black Widow{enter}')

    cy.get('.search-movies-container .movie-icon-item')
      .should('exist')
      .and('have.length.greaterThan', 0)
  })

  it('Test the failure case in the search functionality by entering invalid movie names, triggering error image and text', () => {
    cy.get('button[type="search"]').clear().type('3BHK{enter}')

    cy.get('.not-found-search-image').should('be.visible')
    cy.contains('Your search for 3BHK did not find any matches.')
      .should('be.visible')
  })

})
