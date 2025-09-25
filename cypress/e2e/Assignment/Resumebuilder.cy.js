Cypress.on('uncaught:exception', () => false);

describe('Resume Builder Features', () => {

  beforeEach(() => {
    cy.visit('https://app-dev.nxtjob.ai/sign-in?redirect_url=https%3A%2F%2Fresume-dev.nxtjob.ai%2Fall');

    cy.get("#identifier-field").type("rithas913@gmail.com");
    cy.get(".cl-internal-2iusy0").click();
    cy.get("input[name='password']").type("R!taS!ngh2025");
    cy.get(".cl-internal-2iusy0").click();

    cy.url().should('include', 'resume-dev.nxtjob.ai');
  });

  it('Verifies key elements on Resume Builder page', () => {
    cy.origin('https://resume-dev.nxtjob.ai', () => {
      cy.get('input[placeholder="Search resume name"]').should('exist');
      cy.contains('button', 'Create New').should('be.visible').and('be.enabled');
      cy.get('.cursor-pointer.overflow-hidden', { timeout: 10000 }).should('have.length.at.least', 1);
      cy.contains('Primary Resume', { timeout: 10000 }).should('be.visible');
     cy.contains('div', 'Resume Score', { timeout: 10000 }).should('be.visible');
      cy.contains('button', 'Create New').click();

    });
  });
});
