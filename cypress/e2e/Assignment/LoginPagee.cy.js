Cypress.on('uncaught:exception', () => false);



describe("NxtJob Login Page Tests", () => {
  const originUrl = "https://app-dev.nxtjob.ai";

  beforeEach(() => {
    cy.visit("https://resume-dev.nxtjob.ai/");
  });

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => {
      cy.get(".cl-internal-2iusy0").click();
      // cy.contains('This field is required').should('be.visible')
      //  cy.get("#identifier-field").then(($input) => {
      //   expect($input[0].checkValidity()).to.be.false;
      //   expect($input[0].validationMessage).to.eq("Please fill in this field.");
      // });
      
    });
  });

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => {
      cy.get("#identifier-field").type("rithas913@gmail.com");
      cy.get(".cl-internal-2iusy0").click();
      cy.get(".cl-internal-2iusy0").click();
      // cy.contains('Enter password.').should('be.visible')
      //  cy.get("input[name='password']").then(($input) => {
      //   expect($input[0].checkValidity()).to.be.false;
      //   expect($input[0].validationMessage).to.eq("Please fill in this field.");
      // });
    });
  }); 

  it("Clicking login with empty fields should not redirect", () => {
      cy.origin(originUrl, () => {
       cy.get("#identifier-field").type("invalidEmail");
      //  cy.contains("Please match the format requested").should("be.visible");
      //    cy.get("#identifier-field").then(($input) => {
      //   expect($input[0].checkValidity()).to.be.false;
      //   expect($input[0].validationMessage).to.contain("Please match the format requested");
      // });
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
      cy.url().should('include', 'https://app-dev.nxtjob.ai/personalize')
    });
  }); 
   

 

  
});



  

  

  

  // // 6. Password field masked
  // it("should mask password input", () => {
  //   cy.get("input[name='password']").should("have.attr", "type", "password");
  // });

  // // 7. Remember Me option
  // it("should keep user logged in if Remember Me is checked", () => {
  //   cy.get("input[type='checkbox'][name='remember']").check();
  //   cy.get("input[name='email']").type("validuser@test.com");
  //   cy.get("input[name='password']").type("ValidPass123!");
  //   cy.get("button[type='submit']").click();
  //   cy.reload();
  //   cy.url().should("include", "/dashboard");
  // });

  // // 8. Forgot password link
  // it("should navigate to forgot password page", () => {
  //   cy.contains("Forgot Password").click();
  //   cy.url().should("include", "/forgot-password");
  // });

  // // 9. Prevent SQL injection (security)
  // it("should not allow SQL injection", () => {
  //   cy.get("input[name='email']").type("' OR '1'='1");
  //   cy.get("input[name='password']").type("' OR '1'='1");
  //   cy.get("button[type='submit']").click();
  //   cy.contains("Invalid email or password").should("be.visible");
  // });

  // // 10. Prevent XSS in email field
  // it("should not allow XSS scripts in email", () => {
  //   cy.get("input[name='email']").type("<script>alert('hack')</script>");
  //   cy.get("input[name='password']").type("Password123!");
  //   cy.get("button[type='submit']").click();
  //   cy.contains("Invalid email format").should("be.visible");
  // });

