import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';


const Exports = [PageNotFoundComponent];
const Components = [PageNotFoundComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: Components,
  exports:Exports
})
export class CoreModule { }
