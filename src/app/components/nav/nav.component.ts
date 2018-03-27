import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@services/user.service';

import { NAV_ITEMS } from '@utilities/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems: NavItem[];
  activeRoute: NavItem;

  constructor(
    public user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navItems = NAV_ITEMS;
    switch (this.router.url) {
      case '/':
        this.activeRoute = this.navItems[0];
        break;
      case '/strength':
        this.activeRoute = this.navItems[1];
        break;
      case '/cardio':
        this.activeRoute = this.navItems[2];
        break;
      case '/education':
        this.activeRoute = this.navItems[3];
        break;
    }
  }

}

interface NavItem {
  name: string;
  path: string;
}
