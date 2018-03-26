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
        const token = response['token'];
        this.user.init(form.username.value, token);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      },
      () => this.registering = false
    );
  }

}
