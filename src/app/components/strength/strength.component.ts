import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})
export class StrengthComponent implements OnInit {

  @ViewChild('strengthChart') strengthChart: ElementRef;

  constructor(public modal: ModalService) { }

  ngOnInit() {
  }

}
