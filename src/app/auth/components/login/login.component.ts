import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog) {}

  onSubmit(): void {
    // Handle login form submission logic
  }

  onRegister(): void {
    // Handle register button action
  }

  openRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px',
    });
    this.close()
  }

  close(): void {
    this.dialogRef.close();
  }
}
