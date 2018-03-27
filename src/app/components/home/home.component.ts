import { Component, OnInit } from '@angular/core';

import { UserService } from '@services/user.service';

import { DAY_MAP, MONTH_MAP } from '@utilities/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dayText: string;
  month: string;
  dayNum: number;
  year: number;

  constructor(public user: UserService) { }

  ngOnInit() {
    const date = new Date();
    this.dayText = this.getDay(date.getDay());
    this.month = this.getMonth(date.getMonth());
    this.dayNum = date.getDate();
    this.year = date.getFullYear();
    console.log(date.getMinutes());
  }

  getDay(num: number): string {
    return DAY_MAP[num];
  }

  getMonth(num: number): string {
    return MONTH_MAP[num];
  }

}
