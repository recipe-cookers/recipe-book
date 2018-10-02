import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsListComponent } from './list/list.component';
import { IngridientsItemComponent } from './item/item.component';
import { IngridientsFormComponent } from './form/form.component';
import { IngridientsApplyComponent } from './apply/apply.component';
import { IngridientsComponent } from './ingridients.component';
import { FormsModule } from '@angular/forms';
import { IngridientRouterModule } from './ingridients-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IngridientRouterModule,
    FormsModule,
    
  ],
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent, IngridientsComponent, IngridientsComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent, IngridientsComponent]
})
export class IngridientsModule { }
