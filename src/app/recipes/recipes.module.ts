import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResipeListComponent } from './list/list.component';
import { ResipeItemComponent } from './item/item.component';
import { RecipeBackComponent } from './back/back.component';
import { RecipesRouterModule } from './recipes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RecipesRouterModule
  ],
  declarations: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent],
  exports: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent],
  providers: []
})
export class RecipesModule { }
