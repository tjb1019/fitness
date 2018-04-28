import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ROUTES } from './routes/routes';

import { ApiService } from '@services/api.service';
import { AuthGuard } from '@guards/auth.guard';
import { HttpInterceptorService } from '@services/http-interceptor.service';
import { UserService } from '@services/user.service';
import { ModalService } from '@services/modal.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StrengthComponent } from './components/strength/strength.component';
import { CardioComponent } from './components/cardio/cardio.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { EducationComponent } from './components/education/education.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    StrengthComponent,
    CardioComponent,
    ChallengesComponent,
    EducationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    UserService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
