import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomToasterService } from './custom-toaster.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(
    private customToaster: CustomToasterService,
    private dataService: DataService,
    private http: HttpClient,
  ) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('loggedInUser')),
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  createUser(userInfo: any): Observable<any> {
    const userData = {
      email: userInfo.email,
      username: userInfo.name,
      imageUrl: userInfo.picture, // Ensure this is a full URL
      registrationMethod: userInfo.registrationMethod,
    };
  
    return this.dataService.saveUserData(userData).pipe(
      tap((response) => {
        sessionStorage.setItem('loggedInUser', JSON.stringify(response));
        this.userSubject.next(response);
      }),
      catchError((error) => {
        let errorMessage = 'An error occurred';
  
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
  
        this.customToaster.error(errorMessage, 'Registration Error');
        console.error('Error in createUser:', error);
  
        return throwError(() => new Error(errorMessage));
      }),
    );
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('loggedInUser');
    this.userSubject.next(null);
  }
}
