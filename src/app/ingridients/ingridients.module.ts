import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsListComponent } from './list/list.component';
import { IngridientsItemComponent } from './item/item.component';
import { IngridientsFormComponent } from './form/form.component';
import { IngridientsComponent } from './ingridients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngridientRouterModule } from './ingridients-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IngridientRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsComponent, IngridientsComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsComponent]
})
export class IngridientsModule { }
