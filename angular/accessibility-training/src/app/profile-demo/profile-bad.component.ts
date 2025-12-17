import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-bad',
  standalone: true,
  template: `
    <div class="profile-card bad">
      <img [src]="profile?.imgSrc" alt="Profile Image" width="100" height="100">
      <p>{{ profile?.name || 'Inaccessible User' }}</p>
    </div>
  `,
  styleUrl: './profile-bad.component.css'
})
export class ProfileBadComponent {
  // The intentional bad practice is using the loose 'any' type.
  // The actual alt text is then static, not tied to the data contract.
  @Input() profile: any = {
    imgSrc: 'assets/dog.jpeg', 
    name: 'Dog' 
  };
}