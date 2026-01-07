import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./mainContent/home/home')
        .then(m => m.Home)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

