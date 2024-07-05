import { Injectable } from '@angular/core';
import { ToastrService as NgxToastrService, IndividualConfig } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CustomToasterService {

  private defaultOptions: Partial<IndividualConfig> = {
    progressBar: true,
    positionClass: 'toast-top-center',
    closeButton: true,
    timeOut: 30000
  };

  constructor(private ngxToastr: NgxToastrService) {}

  public success(message: string, title?: string, options?: Partial<IndividualConfig>) {
    console.log('Success Toast:', message, title); // Add this line
    this.ngxToastr.success(message, title, {...this.defaultOptions, ...options});
  }

  public error(message: string, title?: string, options?: Partial<IndividualConfig>) {
    console.log('Error Toast:', message, title); // Add this line
    this.ngxToastr.error(message, title, {...this.defaultOptions, ...options});
  }
}
