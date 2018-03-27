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

  form: HTMLFormElement;
  loggingIn: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form = document.forms['loginForm'];
  }

  login(): void {
    this.loggingIn = true;
    let body = {
      username: this.form.username.value,
      password: this.form.password.value
    }
    this.http.post(`${environment.apiPath}/login`, body).subscribe(
      response => {
        const token = response['token'];
        this.user.init(this.form.username.value, token);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      },
      () => this.loggingIn = false
    );
  }

}
