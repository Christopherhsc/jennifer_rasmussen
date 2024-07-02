import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSmallScreen = false;
  isDropdownOpen = false;

  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('services') servicesElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  constructor(
    private dialog: MatDialog,
    private viewportScroller: ViewportScroller,
  ) {
    this.isSmallScreen = window.innerWidth <= 1050;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 1050;
    });
  }

  scrollTo(sectionId: string = '') {
    this.viewportScroller.scrollToAnchor(sectionId);
    if (this.isSmallScreen) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'glassmorphism-empowered-lightning',
    });
    if (this.isDropdownOpen) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
