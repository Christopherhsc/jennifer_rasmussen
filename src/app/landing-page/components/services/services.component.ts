// services.component.ts

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
import { reviews, tabs, panels } from './services.data';

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

  // Use imported data
  reviews = reviews;
  tabs = tabs;
  panelContent = panels;

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

}
