describe('Cypress Test File Check', () => {
    it('Should successfully load the test runner UI', () => {
        cy.log('Test file loaded successfully!');
        cy.visit('/');
        // This test should pass instantly
    });
});