import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  currentText: string = 'Kontakt';
  currentIndex: number = 3;
  textareaHeight: string = '40px'; // initial height

  expandTextarea() {
    this.textareaHeight = '240px'; // expanded height
  }

  shrinkTextarea() {
    this.textareaHeight = '40px'; // initial height
  }
}
