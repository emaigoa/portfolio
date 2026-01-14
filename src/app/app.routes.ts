import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';


export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ema | Data & ML Portfolio' },
  { path: '**', redirectTo: '' },
];
