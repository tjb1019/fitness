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

  ngOnViewInit() {
    this.form = document.forms['addCardioForm'];
  }

  addCardio() {
    const activity = this.form.activity.value;
    const duration = this.form.duration.value;

    if (activity && duration) {
      this.api.addCardio({activity: activity, duration: duration})
      .then(response => alert('saved'))
      .catch(error => alert('failed'));
    }
  }

}
