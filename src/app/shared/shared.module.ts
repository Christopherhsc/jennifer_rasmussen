import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatDialogModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
