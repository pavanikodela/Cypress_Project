Cypress.on('uncaught:exception', () => false )

describe('Login Page Test', () => {

  beforeEach(() => {
    cy.visit('https://qajobbyapp.ccbp.tech/login',  { failOnStatusCode: false });
  });

  it('Verify Login Page UI', () => {
    cy.get('.login-website-logo').should('be.visible'); 
    cy.contains('label', 'USERNAME').should('be.visible'); 
    cy.contains('label', 'PASSWORD').should('be.visible'); 
  });

  it('Submit with empty input fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('*Username or password is invalid').should('be.visible');
  });

  it('Submit with empty Username field', () => {
    cy.get('#passwordInput').type('rahul@2021');
    cy.get('button[type="submit"]').click();
    cy.contains('*Username or password is invalid').should('be.visible');
  });

  it('Submit with empty Password field', () => {
    cy.get('#userNameInput').type('rahul');
    cy.get('button[type="submit"]').click();
    cy.contains('*Username or password is invalid').should('be.visible');
  });

  it('Submit with invalid Password', () => {
    cy.get('#userNameInput').type('rahul');
    cy.get('#passwordInput').type('rahul');
    cy.get('button[type="submit"]').click();
    cy.contains("*username and password didn't match").should('be.visible');
  });

  it('Successful login', () => {
    cy.get('#userNameInput').type('rahul');
    cy.get('#passwordInput').type('rahul@2021');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'https://qajobbyapp.ccbp.tech/');
  }); 

 

});