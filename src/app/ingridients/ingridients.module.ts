import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngridientsListComponent } from './list/list.component';
import { IngridientsItemComponent } from './item/item.component';
import { IngridientsFormComponent } from './form/form.component';
import { IngridientsApplyComponent } from './apply/apply.component';
<<<<<<< HEAD
import { IngridientRouterModule } from './ingridients-routing.module';
import { ListGuard } from './list/guard/list-guard.service';
import { FormsModule }   from '@angular/forms';

=======
import { IngridientsComponent } from './ingridients.component';
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060

@NgModule({
  imports: [
    CommonModule,
    IngridientRouterModule,
    FormsModule,
    
  ],
<<<<<<< HEAD
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent],
  providers: [ ListGuard]
=======
  declarations: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent, IngridientsComponent, IngridientsComponent],
  exports: [IngridientsListComponent, IngridientsItemComponent, IngridientsFormComponent, IngridientsApplyComponent, IngridientsComponent]
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060
})
export class IngridientsModule { }
