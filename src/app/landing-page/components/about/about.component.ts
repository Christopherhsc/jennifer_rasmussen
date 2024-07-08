import { Component, OnInit } from '@angular/core';
import { aboutData } from './about-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data = aboutData;
  currentMiddleIndex: number = 0;

  ngOnInit() {
    this.updateBackground();
  }

  getCarouselItemStyle(index: number) {
    const angle = ((index - this.currentMiddleIndex + this.data.length) % this.data.length) * (360 / this.data.length);
    const isCurrent = index === this.currentMiddleIndex;

    return {
      transform: `rotateY(${angle}deg) translateZ(290px)`,
      opacity: isCurrent ? 1 : 0.5,
      filter: isCurrent ? 'none' : 'grayscale(70%)',
      width: isCurrent ? '220px' : '200px',
      height: isCurrent ? '400px' : '600px',
    };
  }

  getBackgroundStyle() {
    const middleImageUrl = this.data[this.currentMiddleIndex].imageUrl;
    return {
      'background-image': `url(${middleImageUrl})`,
    };
  }

  rotateCarousel(direction: number) {
    this.currentMiddleIndex = (this.currentMiddleIndex + direction + this.data.length) % this.data.length;
    this.updateBackground();
  }

  updateBackground() {
    const middleImageUrl = this.data[this.currentMiddleIndex].imageUrl;
    document.documentElement.style.setProperty('--background-image', `url(${middleImageUrl})`);
  }
}
