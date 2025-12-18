import { Component, OnInit } from '@angular/core';
import { PetProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-profile-good',
  template: `
    <!-- ✅ Green card -->
    <div class="card-good">
      <h3 class="pet-name">{{ profile?.petName }}</h3>
      <p class="animal-type">{{ profile?.animalType }}</p>
    </div>

    <!-- ✅ Image BELOW the green card -->
    <div class="profile-image-container">
      <img
        [src]="profile?.profileImageUrl"
        [alt]="profile?.profileImageAltText"
        class="profile-image">
    </div>
  `,
  styles: [`
    .pet-name,
    .animal-type {
      color: #003366; /* same green as card-good text */
      font-weight: bold;
    }

    .profile-image-container {
      margin-top: 20px;
      text-align: center;
    }

    .profile-image {
      max-width: 50%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  `]
})
export class ProfileGoodComponent implements OnInit {
  profile: PetProfile | null = null;

  ngOnInit() {
    this.profile = {
      petName: 'Mittens',
      animalType: 'Cat',
      profileImageUrl: 'assets/cat.jpg', // ✅ MUST match filename exactly
      profileImageAltText: 'An orange cat sitting calmly.'
    };
  }
}
