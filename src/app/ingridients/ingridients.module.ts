import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsListComponent } from './list/list.component';
import { IngridientsItemComponent } from './item/item.component';
import { IngridientsFormComponent } from './form/form.component';
import { IngridientsApplyComponent } from './apply/apply.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent]
})
export class IngridientsModule { }
