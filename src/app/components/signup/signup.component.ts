import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '@services/user.service';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registering: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
  }

  signup(): void {
    this.registering = true;
    const form = document.forms['signupForm'];
    let body = {
      username: form.username.value,
      password: form.password.value
    }
    this.http.post(`${environment.apiPath}/users`, body).subscribe(
      response => {
        localStorage.setItem('token', response['token']);
        this.user.initUser(form.username.value, form.password.value);
        this.user.login();
        this.router.navigate(['/home']);
      },
      error => {
        console.error(error);
      },
      () => this.registering = false
    );
  }

}
