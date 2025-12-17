// cypress/e2e/app-a11y.cy.ts
// trigger recompile

describe('Angular Accessibility Demo Scans', () => {
    
    beforeEach(() => {
        cy.visit('/'); 
        
        //  CRITICAL FIX: Wait for the specific buggy component to exist in the DOM 
        // before injecting Axe and scanning. This prevents false negatives.
        cy.get('app-profile-bad').should('exist'); 
        
        cy.injectAxe();
    });

    // 1. Scan the Data Modeling Demo (Initial Load)
    // This test finds errors in the <app-profile-bad> component.
    it('1. Should report violations on load (Data Modeling Demo)', () => {
        // Target only the specific section of the page displaying the data demo
        // This prevents finding unrelated errors elsewhere on the page.
        cy.checkA11y('#demo1'); 
    });

    // 2. Scan the Form Validation Demo (After Interaction)
    // This test ensures ARIA attributes are correct in the error state.
    it('2. Should check accessible form validation after user interaction', () => {
        // Action: Click the email input and click outside (blur) 
        // to trigger the required field validation error message.
        cy.get('#email-2').click().blur();

        // ✅ Assertion: Verify the required ARIA state is set correctly.
        // The input should now be marked as invalid.
        cy.get('#email-2').should('have.attr', 'aria-invalid', 'true');
        
        // ✅ Scan: Check only the form container to ensure ARIA is set correctly
        // and no new violations (like contrast issues) appear when the error message pops up.
        cy.checkA11y('.form-container'); 
    });

    // 3. Demo Test (Removed interactions that don't directly test accessibility)
    // The previous interactions were targeting code snippets, which often aren't necessary for a static scan.
    // We are relying on the two specific accessibility tests above.

});