import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { DetailsBackComponent } from './back/back.component';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRouterModule
  ],
  declarations: [DescriptionComponent, DetailsBackComponent, DetailsComponent],
  exports: [DescriptionComponent, DetailsBackComponent]
})
export class DetailsModule { }
