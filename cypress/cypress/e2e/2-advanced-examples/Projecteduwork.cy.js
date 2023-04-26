describe('Cypress test for Katalon Demo Cura', () => {
    beforeEach(() => {
      // open navigate to url
      cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment');
    });
  
    it('should be able to make an appointment', () => {
      // page filling
      cy.get("#btn-make-appointment").click()
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
      cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check();
      cy.get('#radio_program_medicaid').check();
      cy.get('#txt_visit_date').type('2022-05-15');
      cy.get('#txt_comment').type('This is a test appointment');
      
      // Submit formulir appointment
      cy.get('#btn-book-appointment').click();
      
      // Verification page with assertion succes
      cy.get('#facility').should('contain.text', 'Hongkong CURA Healthcare Center');
      cy.get('#hospital_readmission').should('contain.text', 'Yes');
      cy.get('#program').should('contain.text', 'Medicaid');
      cy.get('#visit_date').should('contain.text', '2022-05-15');
      cy.get('#comment').should('contain.text', 'This is a test appointment');
    });
  });
  
  
   

// Succes loggin with assertion Succes 


// Login Failed data password with assertion 
// describe('Project Heroquapss', () => {
//     it("should form login with valid data ", () => {
//         cy.visit("https://katalon-demo-cura.herokuapp.com/")
//         cy.get("body").click()
//         cy.get("#txt-username").type("John Doe")
//         cy.get("#txt-password").type("ThisIsNotAPasswor")
//         cy.get("#btn-login").click()
//         cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.')  
        
//     });
// });