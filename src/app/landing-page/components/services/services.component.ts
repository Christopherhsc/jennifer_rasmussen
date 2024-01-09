import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  currentText: string = 'Mine ydelser';
  currentIndex: number = 2;
  currentReviewIndex = 0;

  @ViewChild('contact') contactElement: ElementRef;

  reviews = [
    {
      name: 'Kristiane: ⭐⭐⭐⭐⭐',
      text: 'Med hjælp fra Jennifer, har jeg fundet en kærlighed til træning og til mig selv, som jeg aldrig troede jeg ville finde. Jeg kan se og mærke fantastiske resultater, som jeg ikke har kunnet få uden Jennifers hjælp og vejledning. Vægttab, opbygning af muskelmasse, mere energi til hverdagen, et klarere hoved samt en overordnet ro i kroppen er bl.a. nogle af de mange resultater jeg selv har bemærket! Jennifer er utrolig motiverende, sød og afslappet og så er hun bare enormt dygtig til både at forklare øvelser, men også til at vise hvordan man får allermest ud af sin træning - hun er hele pakken og jeg kan slet ikke anbefale hende nok.',
    },
    {
      name: 'Maria: ⭐⭐⭐⭐⭐',
      text: 'Jeg var på udkig efter en personlig træner, som var i stand til at forstå mine behov og mål og dermed skabe et ordentligt kost- og træningsprogram - målrettet mig. Det fandt jeg i Jennifer. Efter et rygestop og overgangsalder har det været svært, at fastholde den vægt jeg befandt mig bedst i. Jennifer har formået at være min inspiration og motivationskilde, især de dage hvor det har været hårdt. Hun er min personlige træner og hun har gjort en meget stor forskel for mig',
    },
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  get currentReview() {
    return this.reviews[this.currentReviewIndex];
  }

  scrollTo(sectionId: string = '') {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  nextReview() {
    this.currentReviewIndex =
      (this.currentReviewIndex + 1) % this.reviews.length;
  }

  previousReview() {
    this.currentReviewIndex =
      (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
