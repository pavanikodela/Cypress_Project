Cypress.on('uncaught:exception', () => false);
describe('End-to-End Personalize Workflow', () => {
  const originUrl = "https://app-dev.nxtjob.ai";

  it('Login with valid credentials and complete personalization flow', () => {
    cy.visit(originUrl);

    cy.get("#identifier-field").type("rithas913@gmail.com");
    cy.get(".cl-internal-2iusy0").click();
    cy.get("input[name='password']").type("R!taS!ngh2025");
    cy.get(".cl-internal-2iusy0").click();
    cy.url().should('include', 'https://app-dev.nxtjob.ai/personalize');

    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', { force: true });
    
    cy.get('.font-medium.text-gray-900').should('be.visible').and('contain', 'Upload Successful');
    cy.contains('button', 'Next').should('be.enabled').click();
  

 cy.get('h1.font-medium.text-2xl.text-gray-900').should('be.visible').and('contain', 'Tell us more about you.');

    cy.get('input[name="full_name"]').type("Pavanil Kodela");
    cy.get('input[name="phone_number"]').type("91 63008-77748");
    cy.get('input[name="job_title"]').type("Software Engineer");
    cy.get('input[name="experience"]').type("2 years");
    
    
    cy.contains('button', 'Next').should('be.enabled').click();
    
    cy.url().should('include', 'https://app-dev.nxtjob.ai/dashboard'); 
  });
}); 

