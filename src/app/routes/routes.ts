import { Route } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';

export const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
