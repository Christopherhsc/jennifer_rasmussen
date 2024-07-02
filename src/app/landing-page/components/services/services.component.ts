import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  currentText: string = 'Mine ydelser';
  currentIndex: number = 2;
  currentReviewIndex = 0;
  isPanelExpanded: boolean = false;
  slideInterval: any;
  autoSlideTimeout: any;

  @ViewChild('contact') contactElement: ElementRef;
  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

  reviews = [
    {
      name: 'Kristiane: ⭐⭐⭐⭐⭐',
      text: 'Med hjælp fra Jennifer, har jeg fundet en kærlighed til træning og til mig selv, som jeg aldrig troede jeg ville finde. Jeg kan se og mærke fantastiske resultater, som jeg ikke har kunnet få uden Jennifers hjælp og vejledning. Vægttab, opbygning af muskelmasse, mere energi til hverdagen, et klarere hoved samt en overordnet ro i kroppen er bl.a. nogle af de mange resultater jeg selv har bemærket!',
    },
    {
      name: 'Maria: ⭐⭐⭐⭐⭐',
      text: 'Jeg var på udkig efter en personlig træner, som var i stand til at forstå mine behov og mål og dermed skabe et ordentligt kost- og træningsprogram - målrettet mig. Det fandt jeg i Jennifer. Efter et rygestop og overgangsalder har det været svært, at fastholde den vægt jeg befandt mig bedst i. Jennifer har formået at være min inspiration og motivationskilde, især de dage hvor det har været hårdt.',
    },
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (this.autoSlideTimeout) {
      clearTimeout(this.autoSlideTimeout);
    }
  }

  get currentReview() {
    return this.reviews[this.currentReviewIndex];
  }

  scrollTo(sectionId: string = '') {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  nextReview(isManual = false) {
    this.currentReviewIndex =
      (this.currentReviewIndex + 1) % this.reviews.length;
    if (isManual) {
      this.resetAutoSlide();
    }
  }

  prevReview(isManual = false) {
    this.currentReviewIndex =
      (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
    if (isManual) {
      this.resetAutoSlide();
    }
  }

  goToReview(index: number) {
    this.currentReviewIndex = index;
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextReview();
    }, 12000); // Change slide every 12 seconds
  }

  resetAutoSlide() {
    clearInterval(this.slideInterval);
    clearTimeout(this.autoSlideTimeout);
    this.autoSlideTimeout = setTimeout(() => {
      this.startAutoSlide();
    }, 2000);
  }

  onPanelExpanded(state: boolean, panelIndex: number) {
    if (state) {
      this.isPanelExpanded = true;
      this.panels.forEach((panel, index) => {
        if (index !== panelIndex) {
          panel.close();
        }
      });
    } else {
      this.checkIfAnyPanelExpanded();
    }
  }

  checkIfAnyPanelExpanded() {
    this.isPanelExpanded = this.panels.some((panel) => panel.expanded);
  }

  closeAllPanels() {
    this.panels.forEach((panel) => panel.close());
    this.isPanelExpanded = false;
  }

  onSwipe(event: any): void {
    console.log('Swipe event detected:', event);
    if (event.direction === 2) {
      // swipe left
      this.nextReview(true);
    } else if (event.direction === 4) {
      // swipe right
      this.prevReview(true);
    }
  }
}
