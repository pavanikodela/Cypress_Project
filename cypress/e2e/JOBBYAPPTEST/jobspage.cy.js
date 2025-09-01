Cypress.on('uncaught:exception', () => false )

describe('Jobs Page Test', () => {

  beforeEach(() => {
  
    cy.visit('https://qajobbyapp.ccbp.tech/login');
    cy.get('#userNameInput').type('rahul');
    cy.get('#passwordInput').type('rahul@2021');
    cy.get('button[type="submit"]').click();

   
    cy.url().should('eq', 'https://qajobbyapp.ccbp.tech/');
    cy.visit('https://qajobbyapp.ccbp.tech/jobs');
  });

  it('Verify Profile Container UI', () => {
    cy.get('.profile-img').should('be.visible'); 
    cy.contains('.profile-name', 'Rahul Attluri').should('be.visible');
    cy.contains('.short-bio', 'Lead Software Developer and AI-ML expert').should('be.visible'); 
  });

it('Successful Job Search', () => {
  const searchText = 'Devops Engineer';
  cy.get('input[type="search"]:visible').clear().type(searchText);
  cy.get('.search-icon:visible').click();
  cy.get('.job-item').its('length').should('be.gt', 0);
});

it('Unsuccessful Job Search', () => {
  cy.get('input[type="search"]:visible').clear().type('Netflix');
  cy.get('.search-icon:visible').click();
  cy.get('.jobs-not-found-img').should('be.visible');
  cy.contains('.jobs-not-found-heading', 'No Jobs Found').should('be.visible');
  cy.contains('p', 'We could not find any jobs. Try other filters.').should('be.visible');
});


});