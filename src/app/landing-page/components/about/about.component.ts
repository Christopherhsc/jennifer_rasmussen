import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [
    '/assets/about1.jpeg',
    '/assets/about2.jpeg',
    '/assets/about3.jpeg',
  ];
  slideInterval: any;
  autoSlideTimeout: any;

  constructor(private cdr: ChangeDetectorRef) {}

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

  nextSlide(isManual = false) {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.detectChanges();
    if (isManual) {
      this.resetAutoSlide();
    }
  }

  prevSlide(isManual = false) {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.cdr.detectChanges();
    if (isManual) {
      this.resetAutoSlide();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.cdr.detectChanges();
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  resetAutoSlide() {
    clearInterval(this.slideInterval);
    clearTimeout(this.autoSlideTimeout);
    this.autoSlideTimeout = setTimeout(() => {
      this.startAutoSlide();
    }, 2000);
  }
}
