import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../shared/services/auth.service';
import { CustomToasterService } from 'src/app/shared/services/custom-toaster.service';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private customToaster: CustomToasterService,
  ) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '709089986597-9puf3gthtul1s4l8sh26utbfi0oqrart.apps.googleusercontent.com',
      callback: (resp: any) => this.handleGoogleLogin(resp),
    });

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

  handleGoogleLogin(response: any) {
    const registrationType = 'GOOGLE';
    if (response) {
      const payload = this.decodeToken(response.credential);
      this.authService
        .createUser({
          ...payload,
          registrationMethod: registrationType,
        })
        .subscribe({
          next: (res) => {
            console.log('User created/updated successfully:', res);
            this.customToaster.success(
              `Greetings ${payload.name}!`,
              'Authentication successful',
            );
            this.dialogRef.close();
          },
          error: (err) => {
            console.error('Error creating user:', err);
            this.customToaster.error('Failed to authenticate', 'Error');
          },
        });
    }
  }
}
