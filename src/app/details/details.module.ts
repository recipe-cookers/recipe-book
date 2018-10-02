import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { DetailsBackComponent } from './back/back.component';
<<<<<<< HEAD
import { DetailsRouterModule } from './details-routing.module';
=======
import { DetailsComponent } from './details.component';
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060

@NgModule({
  imports: [
    CommonModule,
    DetailsRouterModule
  ],
  declarations: [DescriptionComponent, DetailsBackComponent, DetailsComponent],
  exports: [DescriptionComponent, DetailsBackComponent]
})
export class DetailsModule { }
