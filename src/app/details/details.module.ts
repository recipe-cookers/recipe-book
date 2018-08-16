import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { DetailsBackComponent } from './back/back.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DescriptionComponent, DetailsBackComponent],
  exports: [DescriptionComponent, DetailsBackComponent]
})
export class DetailsModule { }
