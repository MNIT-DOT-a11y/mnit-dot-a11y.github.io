// Inside src/app/app.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- REQUIRED for *ngIf
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms'; // <-- REQUIRED for formControl

// Import the standalone demo components so the template can recognize them
import { ProfileBadComponent } from './profile-demo/profile-bad.component'; 
import { ProfileGoodComponent } from './profile-demo/profile-good.component';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.html', 
  styleUrls: ['./app.css'],
  // 🔑 FIX: Import ALL template dependencies here because AppComponent is standalone
  imports: [
    CommonModule,            // Fixes all *ngIf warnings (NG8103)
    ReactiveFormsModule,     // Fixes [formControl] binding error (NG8002)
    ProfileBadComponent,     // Fixes 'app-profile-bad' unknown element error (NG8001)
    ProfileGoodComponent     // Fixes 'app-profile-good' unknown element error (NG8001)
  ],
  standalone: true // Must be true as this is a standalone component
}) 
export class AppComponent { 
  title = 'Accessibility Training Demos';
  
  // FIX: Logic for the email field demo must be present (TS2339 fix)
  email = new FormControl('', [Validators.required, Validators.email]); 
}