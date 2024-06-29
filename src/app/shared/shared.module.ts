import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PhoneSpaceDirective } from './directives/phone-space.directive';

@NgModule({
  declarations: [HeaderComponent, PhoneSpaceDirective],
  imports: [CommonModule, MatDialogModule, BrowserAnimationsModule],
  exports: [HeaderComponent, PhoneSpaceDirective],
})
export class SharedModule {}
