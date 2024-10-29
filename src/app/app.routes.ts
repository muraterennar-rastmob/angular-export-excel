import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'export-excel',
    loadComponent: () => import('./pages/export-with-library-component/export-with-library-component.component').then(c => c.ExportWithLibraryComponentComponent)
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
