import { Injectable } from '@angular/core';

import { User } from '@models/user';

@Injectable()
export class UserService {

  user: User;
  loggedIn: boolean;

  constructor() { }

  initUser(username: string, password: string): void {
    this.user = new User(username, password);
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

}
