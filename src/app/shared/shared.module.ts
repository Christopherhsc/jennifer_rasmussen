import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneSpaceDirective } from './directives/phone-space.directive';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//MAT MODULES
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

//custom components
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, PhoneSpaceDirective],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
  ],
  exports: [HeaderComponent, PhoneSpaceDirective, HttpClientModule],
})
export class SharedModule {}
