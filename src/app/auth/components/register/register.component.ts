import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class RegisterComponent {
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private dialog: MatDialog) {}

  onSubmit(): void {
    // Handle login form submission logic
  }

  onRegister(): void {
    // Handle register button action
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });
    this.close()
  }

  close(): void {
    this.dialogRef.close();
  }
}
