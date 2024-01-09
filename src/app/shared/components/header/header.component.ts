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

  scrollTo(sectionId: string = '') {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  constructor(
    private dialog: MatDialog,
    private viewportScroller: ViewportScroller
  ) {
    this.isSmallScreen = window.innerWidth <= 1050;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 1050;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }
}
