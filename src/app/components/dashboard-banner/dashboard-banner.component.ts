import { Component, OnInit } from '@angular/core';

import { UserService } from '@services/user.service';

import { DAY_MAP,
        MONTH_MAP,
        MORNING_HOURS,
        AFTERNOON_HOURS,
        EVENING_HOURS } from '@utilities/constants';

@Component({
  selector: 'app-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss']
})
export class DashboardBannerComponent implements OnInit {

  greeting: string;
  dayText: string;
  month: string;
  dayNum: number;
  year: number;

  constructor(public user: UserService) { }

  ngOnInit() {
    const date = new Date();
    this.greeting = this.getGreeting(date.getHours());
    this.dayText = this.getDay(date.getDay());
    this.month = this.getMonth(date.getMonth());
    this.dayNum = date.getDate();
    this.year = date.getFullYear();
  }

  getGreeting(num: number): string {
    if (MORNING_HOURS.includes(num)) {
      return 'Good morning';
    }
    else if (AFTERNOON_HOURS.includes(num)) {
      return 'Good afternoon';
    }
    else if (EVENING_HOURS.includes(num)) {
      return 'Good evening';
    } else {
      return 'Welcome';
    }

  }

  getDay(num: number): string {
    return DAY_MAP[num];
  }

  getMonth(num: number): string {
    return MONTH_MAP[num];
  }

}
