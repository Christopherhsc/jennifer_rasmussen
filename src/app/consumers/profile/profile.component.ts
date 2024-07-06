import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'], // Ensure this path is correct
  animations: [
    trigger('slideIn', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('closed => open', [animate('300ms ease-in')]),
      transition('open => closed', [animate('300ms ease-out')]),
    ])
  ]
})
export class ProfileComponent implements OnInit {
  isOpen = false;
  isSmallScreen = false;
  profileData = { username: '', email: '' };

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
    this.isSmallScreen = window.innerWidth <= 1050;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 1050;
    });
    setTimeout(() => this.isOpen = true, 0);  // Trigger the opening animation
  }

  ngOnInit(): void {
    console.log("kommer vi her?")
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.isOpen = false;
    setTimeout(() => {
      this.router.navigate([{ outlets: { modal: null } }]);
      this.dialogRef.close();
    }, 300);
  }

  onSubmit(): void {
    // Save profile changes logic here
    this.closeModal();
  }
}
