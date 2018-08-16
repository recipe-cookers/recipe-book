import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResipeListComponent } from './list/list.component';
import { ResipeItemComponent } from './item/item.component';
import { RecipeBackComponent } from './back/back.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent],
  exports: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent]
})
export class RecipesModule { }
