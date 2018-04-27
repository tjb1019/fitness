import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '@services/user.service';
import { ApiService } from '@services//api.service';

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
    private router: Router,
    private user: UserService,
    private api: ApiService
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
    this.api.login(body)
    .then(response => {
      const token = response['token'];
      this.user.init(this.form.username.value, token);
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.error(error);
      // TODO add error to ui
    })
    .then(() => this.loggingIn = false);
  }

}
