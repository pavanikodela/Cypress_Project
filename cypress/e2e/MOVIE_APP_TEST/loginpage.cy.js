describe('Login Page Test', () => {

    beforeEach(() => {
     cy.visit('https://qamoviesapp.ccbp.tech') 
   
});
  
   //LOGIN PAGE TEST// 
   
    it('Navigate to Movie App Page', () => {
        cy.get('.login-website-logo').should('be.visible') 
      
        cy.get('.sign-in-heading').should('have.text', 'Login') 
       
        cy.contains('label', 'USERNAME').should('be.visible')
       
        cy.contains('label', 'PASSWORD').should('be.visible')
        
        cy.get('.login-button').should('have.text', 'Login')
    })

    //testing login functionality// 

    it('Login with empty input fields', () => {
        cy.get('.login-button').click(); 
        cy.contains('*Username or password is invalid').should('be.visible')
    })

    it('Login with correct username and wrong password', () => {
        cy.get('#usernameInput').type('rahul') 
        cy.get('#passwordInput').type('rahul@2022')
        cy.get('.login-button').click() 
        cy.contains("*username and password didn't match").should('be.visible')
    }) 

    it('Login with valid credentials', () => {
        cy.get('#usernameInput').type('rahul') 
        cy.get('#passwordInput').type('rahul@2021')
        cy.get('.login-button').click() 
        cy.url().should('eq', 'https://qamoviesapp.ccbp.tech/')
    })

  
})

    
    
   

