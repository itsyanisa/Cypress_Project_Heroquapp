// Success login with assertion Success 
  
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
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
        cy.get('[type="checkbox"]').check()
        cy.get('#radio_program_medicare').check();
        cy.get('#txt_visit_date').type('2023-08-15');
        cy.screenshot('clicking-on-nav')
        
        // Submit formulir appointment
        cy.get('#btn-book-appointment').click();
        
        // Verification page with assertion succes
        cy.get('#facility').should('contain.text', 'Tokyo CURA Healthcare Center');
        cy.get('#hospital_readmission').should('contain.text', 'Yes');
        cy.get('#program').should('contain.text', 'Medicare');
        cy.screenshot()
      });
    
    
  

  
//  // Login Failed data password with assertion 
//         describe('Project Heroquapss', () => {
//             it("should form login with valid data ", () => {
//                 cy.visit("https://katalon-demo-cura.herokuapp.com/")
//                 cy.get("body").click()
//                 cy.get("#txt-username").type("John Doe")
//                 cy.get("#txt-password").type("ThisIsNotAPasswor")
//                 cy.get("#btn-login").click()
//                 cy.get('.text-danger').should('contain', 'Login failed! Please ensure the username and password are valid.')  
                
//             });
    it('should be able click navbar', () => {
        cy.get('#menu-toggle > .fa')
    
    
    });

});
