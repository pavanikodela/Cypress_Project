Cypress.on('uncaught:exception', () => false);

describe('Resume Builder Features', () => {
    const appUrl = 'https://app-dev.nxtjob.ai';
    const resumeBuilderUrl = 'https://resume-dev.nxtjob.ai';

    before(() => {
        cy.session('login_session', () => {
            cy.visit(appUrl);
            cy.get("#identifier-field").type("rithas913@gmail.com");
            cy.get(".cl-internal-2iusy0").click();
            cy.get("input[name='password']").type("R!taS!ngh2025");
            cy.get(".cl-internal-2iusy0").click();
            cy.url().should('include', '/dashboard');
        });
    });

    it('Verifies key elements on the Resume Builder page and navigates to the builder', () => {
        cy.visit('https://resume-dev.nxtjob.ai/all');
        cy.contains('div', 'Resumes').should('be.visible');
        cy.get('input[placeholder="Search resume name"]').should('be.visible');
        cy.contains('button', 'Create New').should('be.visible').and('be.enabled');
        cy.get('.cursor-pointer.overflow-hidden').should('have.length.at.least', 1);
        cy.contains('span', 'Primary Resume').should('be.visible');
        cy.contains('div', 'Resume Score').should('be.visible');
        cy.contains('button', 'Create New').click();
        cy.url().should('include', '/builder');
    });
});