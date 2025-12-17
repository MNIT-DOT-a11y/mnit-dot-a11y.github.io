import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // ⬅️ ADD THIS LINE HERE
    baseUrl: 'http://localhost:4200', 
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
