import { Route } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';

import { LoginComponent } from '@components/login/login.component';
import { SignupComponent } from '@components/signup/signup.component';
import { HomeComponent } from '@components/home/home.component';

export const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
