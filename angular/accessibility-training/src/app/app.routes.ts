import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApiContractsComponent } from './training/api-contracts/api-contracts';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'training/api-contracts', component: ApiContractsComponent }
];
