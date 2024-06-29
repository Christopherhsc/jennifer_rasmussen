import { Component } from '@angular/core';
import { reviews, tabs, panels } from './services.data'; // Adjust the import path if necessary

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  currentReviewIndex = 0; // Current review index
  activeTabIndex = 0; // Current active tab index
  
  // Use imported data
  reviews = reviews;
  tabs = tabs;
  panels = panels;

  get currentReview() {
    return this.reviews[this.currentReviewIndex];
  }

  switchTab(index: number): void {
    this.activeTabIndex = index; // Update active tab index
  }

  nextReview() {
    this.currentReviewIndex =
      (this.currentReviewIndex + 1) % this.reviews.length;
  }

  previousReview() {
    this.currentReviewIndex =
      (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  handleButtonClick(panelId: string): void {
    console.log(`Button clicked in panel: ${panelId}`);
  }
}
