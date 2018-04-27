import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('strengthChart') strengthChart: ElementRef;
  @ViewChild('cardioChart') cardioChart: ElementRef;

  constructor(public user: UserService) { }

  ngOnInit() {
    this.initStrength();
    this.initCardio();
  }

  initStrength(): void {
    const strength = this.strengthChart.nativeElement.getContext('2d');
    const chart = new Chart(strength, {
      type: 'horizontalBar',
      data: {
          labels: ['Arms', 'Shoulders', 'Chest', 'Back', 'Legs', 'Abs'],
          datasets: [{
              label: 'Repititions',
              data: [20, 10, 5, 2, 20, 90],
              backgroundColor: '#272525',
              borderColor: '#272525',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'April 14, 2018'
        },
        legend: {
          display: false
        }
      }
    });
  }

  initCardio(): void {
    const cardio = this.cardioChart.nativeElement.getContext('2d');
    const chart = new Chart(cardio, {
      type: 'horizontalBar',
      data: {
          labels: ['Run', 'Soccer', 'Spin', 'Walk'],
          datasets: [{
              label: 'Duration (mins)',
              data: [130, 90, 35, 60],
              backgroundColor: '#272525',
              borderColor: '#272525',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'April 14, 2018'
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            labelString: 'Duration'
          }]
        }
      }
    });
  }

}
