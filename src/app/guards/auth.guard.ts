import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '@services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private user: UserService
  ) {}

  canActivate(): boolean {
    if (!this.user.loggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
