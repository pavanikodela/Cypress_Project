describe('DASHBOARD FEATURES TEST', () => {
    const originUrl = 'https://app-dev.nxtjob.ai'

    beforeEach("Login with valid credentials should succeed", () => {
        cy.visit(originUrl);
        cy.get("#identifier-field").type("rithas913@gmail.com");
        cy.get(".cl-internal-2iusy0").click();
        cy.get("input[name='password']").type("R!taS!ngh2025");
        cy.get(".cl-internal-2iusy0").click();
        cy.url().should('include', 'https://app-dev.nxtjob.ai/dashboard')
    });


    it('verifying dashboard features', () => {
       
        cy.contains('h1', 'Your Job Search Progress').should('be.visible') 
        cy.contains('div', 'Resume Wizard').should('be.visible').click() 
        cy.contains('div', 'Job Search Wizard').should('be.visible').click() 
        cy.contains('div', 'Interview Wizard').should('be.visible').click() 
        cy.contains('div', 'The Grand Master').should('be.visible').click() 


    })

})
