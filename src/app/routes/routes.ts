import { Route } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';

import { LoginComponent } from '@components/login/login.component';
import { SignupComponent } from '@components/signup/signup.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { StrengthComponent } from '@components/strength/strength.component';
import { CardioComponent } from '@components/cardio/cardio.component';
import { EducationComponent } from '@components/education/education.component';

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
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'strength',
    component: StrengthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cardio',
    component: CardioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'education',
    component: EducationComponent,
    canActivate: [AuthGuard]
  }
];
