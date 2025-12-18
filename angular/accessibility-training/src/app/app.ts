import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    RouterOutlet,  // for <router-outlet>
    RouterLink     // for [routerLink]
  ]
})
export class AppComponent {
  title = 'Accessibility Training Demos';
  // Keep the control if you still reference it elsewhere, otherwise you can remove it
  email = new FormControl('', [Validators.required, Validators.email]);
}
