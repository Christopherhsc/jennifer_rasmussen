import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ViewportScroller } from '@angular/common';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { ProfileComponent } from 'src/app/consumers/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSmallScreen = false;
  isDropdownOpen = false;
  user: any;

  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('services') servicesElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  constructor(
    private dialog: MatDialog,
    private viewportScroller: ViewportScroller,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isSmallScreen = window.innerWidth <= 1050;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 1050;
    });
  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
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

  openProfileSettingsModal() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '250px',
      data: { name: 'Your Data Here' },
    });
    this.router.navigate([{ outlets: { profile: 'profile' } }]);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    this.authService.logout();
  }
}
