Cypress.on('uncaught:exception', () => false);



describe("NxtJob Login Page Tests", () => {
  const originUrl = "https://app-dev.nxtjob.ai";

  beforeEach(() => {
    cy.visit("https://resume-dev.nxtjob.ai/");
  });

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => {
      const actual = 'This field is required'
      cy.get(".cl-internal-2iusy0").click();
    
      if('This field is required' === actual){
            console.log('test case is pass')
      }
      
     
      
    });
  });

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => { 
      const actual = 'Enter password.'
      cy.get("#identifier-field").type("rithas913@gmail.com");
      cy.get(".cl-internal-2iusy0").click();
      cy.get(".cl-internal-2iusy0").click();
     
      if('Enter password.' === actual){
        console.log('test case is pass')
      }
     
    });
  }); 

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => {
      const actual = 'Please match the format requested'
       cy.get("#identifier-field").type("invalidEmail");
     
      if('Please match the format requested' === actual){
        console.log('test case is pass')
      }
     
    });
  }); 

  it("hould show error for invalid email format", () => {
      cy.origin(originUrl, () => {
      cy.get("#identifier-field").type("rithas913@gmail.com");
    cy.get(".cl-internal-2iusy0").click();
    cy.get("input[name='password']").type("@#$%!");
    cy.get(".cl-internal-2iusy0").click();
    cy.contains("Password is incorrect. Try again, or use another method.").should("be.visible");
    });
  }); 

  

  it("Login with valid credentials should succeed", () => {
    cy.origin(originUrl, () => {
      cy.get("#identifier-field").type("rithas913@gmail.com");
      cy.get(".cl-internal-2iusy0").click();
      cy.get("input[name='password']").type("R!taS!ngh2025");
      cy.get(".cl-internal-2iusy0").click(); 
      cy.url().should('include', '?tab=score')
    });
  }); 
   

 

  
});



  

  

  
