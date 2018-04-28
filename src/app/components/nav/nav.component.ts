import { Component, OnInit } from '@angular/core';

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

  constructor(public user: UserService) { }

  ngOnInit() {
    this.navItems = NAV_ITEMS;
    switch (window.location.pathname) {
      case '/':
        this.activeRoute = this.navItems[0];
        break;
      case '/strength':
        this.activeRoute = this.navItems[1];
        break;
      case '/cardio':
        this.activeRoute = this.navItems[2];
        break;
      case '/challenges':
        this.activeRoute = this.navItems[3];
        break;
      case '/education':
        this.activeRoute = this.navItems[4];
        break;
    }
  }

}

interface NavItem {
  name: string;
  path: string;
}
