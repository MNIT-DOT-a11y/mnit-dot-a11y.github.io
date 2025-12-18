// src/app/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ProfileBadComponent } from './profile-demo/profile-bad.component';
import { ProfileGoodComponent } from './profile-demo/profile-good.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileBadComponent,
    ProfileGoodComponent
  ],
  templateUrl: './home.html'
})
export class HomeComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
}
