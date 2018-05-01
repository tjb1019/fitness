import { Component, OnInit } from '@angular/core';

import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.scss']
})
export class CardioComponent implements OnInit {

  form: HTMLFormElement;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form = document.forms['addCardioForm'];
  }

  addCardio() {
    const date = this.form.date.value;
    const activity = this.form.activity.value;
    const duration = this.form.duration.value;

    if (date && activity && duration) {
      this.api.addCardio({date: date, activity: activity, duration: duration})
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }
  }

}
