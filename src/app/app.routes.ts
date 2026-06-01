import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'patients',
    loadComponent: () =>
      import('./features/patients/patients').then((m) => m.Patients),
  },
  {
    path: 'consultations',
    loadComponent: () =>
      import('./features/consultations/consultations').then(
        (m) => m.Consultations
      ),
  },
  {
    path: 'vitals',
    loadComponent: () =>
      import('./features/vitals/vitals').then((m) => m.Vitals),
  },
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full',
  },
];
