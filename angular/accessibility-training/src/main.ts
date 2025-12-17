import { bootstrapApplication } from '@angular/platform-browser';
// Import the standalone root component
import { AppComponent } from './app/app';

// Launch the application using the standalone component
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));