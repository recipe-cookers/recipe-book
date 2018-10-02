import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { StartRouterModule } from './start-routing.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StartRouterModule,
    FormsModule
  ],
  declarations: [StartComponent],
  exports: [StartComponent]
})
export class StartModule { }
