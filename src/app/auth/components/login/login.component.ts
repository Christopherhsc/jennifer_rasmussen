import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {
    // Initialize the Google Sign-In client
    google.accounts.id.initialize({
      client_id:
        '709089986597-9puf3gthtul1s4l8sh26utbfi0oqrart.apps.googleusercontent.com',
      callback: (resp: any) => this.handleAuth(resp),
    });

    // Render the Google Sign-In button
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleAuth(response: any) {
    if (response) {
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem('authenticatedUser', JSON.stringify(payLoad));

      // Verify if the sessionStorage item is set correctly
      const storedUser = sessionStorage.getItem('authenticatedUser');
      if (storedUser) {
        console.log('User authenticated:', storedUser);
        this.dialogRef.close(); // Close the modal
      } else {
        console.error('Failed to set sessionStorage item');
      }
    }
  }
}
