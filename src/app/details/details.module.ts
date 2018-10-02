import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { DetailsBackComponent } from './back/back.component';
import { DetailsRouterModule } from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRouterModule
  ],
  declarations: [DescriptionComponent, DetailsBackComponent],
  exports: [DescriptionComponent, DetailsBackComponent]
})
export class DetailsModule { }
