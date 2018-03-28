import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})
export class StrengthComponent implements OnInit {

  modalOverlay: HTMLElement;
  close: HTMLElement;
  modalTitle: string;

  constructor() { }

  ngOnInit() {
    this.modalOverlay = <HTMLElement>document.querySelector('.modal-overlay');
    this.close = <HTMLElement>document.querySelector('.close');
  }

  openModal(): void {
    this.modalOverlay.setAttribute('style', 'display: flex');
    this.modalTitle = 'Modal Title';
  }

  closeClick() {
    this.modalOverlay.setAttribute('style', 'display: none');
  }

  outsideClick(e) {
    if (e.target == this.modalOverlay) {
      this.modalOverlay.setAttribute('style', 'display: none');
    }
  }

}
