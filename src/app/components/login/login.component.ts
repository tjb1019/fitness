import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '@services/user.service';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggingIn: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.loggingIn = true;
    const form = document.forms['loginForm'];
    let body = {
      username: form.username.value,
      password: form.password.value
    }
    this.http.post(`${environment.apiPath}/login`, body).subscribe(
      response => {
        const token = response['token'];
        this.user.init(form.username.value, token);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      },
      () => this.loggingIn = false
    );
  }

}
