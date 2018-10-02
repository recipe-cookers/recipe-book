import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/list.component';
import { RecipeItemComponent } from './item/item.component';
import { RecipeBackComponent } from './back/back.component';
import { RecipesComponent } from './recipes.component';
import { RecipiesRoutingModule} from './recipies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecipiesRoutingModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, RecipeBackComponent, RecipesComponent],
  exports: [RecipeListComponent, RecipeItemComponent, RecipeBackComponent]
})
export class RecipesModule { }
