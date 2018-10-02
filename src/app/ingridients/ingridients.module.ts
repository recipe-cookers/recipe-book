import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsListComponent } from './list/list.component';
import { IngridientsItemComponent } from './item/item.component';
import { IngridientsFormComponent } from './form/form.component';
import { IngridientsApplyComponent } from './apply/apply.component';
import { IngridientRouterModule } from './ingridients-routing.module';
import { ListGuard } from './list/guard/list-guard.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IngridientRouterModule,
    FormsModule,
    
  ],
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent],
  providers: [ ListGuard]
})
export class IngridientsModule { }
