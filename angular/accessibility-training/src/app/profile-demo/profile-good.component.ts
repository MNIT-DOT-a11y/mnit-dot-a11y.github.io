import { Component, OnInit } from '@angular/core';
// Import the new PetProfile interface
import { PetProfile } from '../models/user-profile.model'; 

@Component({ 
  selector: 'app-profile-good', 
  template: ` 
    <div class="card card-good"> 
      <h3>{{ profile?.petName }}</h3> 
      <p>{{ profile?.animalType }}</p> 
      <img
        [src]="profile?.profileImageUrl"
        [alt]="profile?.profileImageAltText"> 
    </div> 
  ` ,
  styles: []
}) 
export class ProfileGoodComponent implements OnInit { 
  profile: PetProfile | null = null; // ✅ GOOD PRACTICE: Uses the strong PetProfile type

  ngOnInit() { 
    this.profile = { 
      // Clear, descriptive names that enforce accessible data
      petName: 'Mittens', 
      animalType: 'Cat', 
      profileImageUrl: '/assets/cat.jpg', // Ensure this image is in src/assets
      profileImageAltText: 'An alert, fluffy orange cat on a gray rug.' // ✅ Specific, descriptive alt text
    }; 
  } 
}