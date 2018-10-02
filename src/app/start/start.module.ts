import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
<<<<<<< HEAD
import { StartRouterModule } from './start-routing.module';
import { FormsModule }   from '@angular/forms';
=======
import { RouterModule } from '@angular/router';

>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    StartRouterModule,
    FormsModule
=======
    RouterModule,
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060
  ],
  declarations: [StartComponent],
  exports: [StartComponent]
})
export class StartModule { }
