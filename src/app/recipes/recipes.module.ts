import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/list.component';
import { RecipeItemComponent } from './item/item.component';
import { RecipeBackComponent } from './back/back.component';
<<<<<<< HEAD
import { RecipesRouterModule } from './recipes-routing.module';

=======
import { RecipesComponent } from './recipes.component';
import { RecipiesRoutingModule} from './recipies-routing.module';
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    RecipesRouterModule
  ],
  declarations: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent],
  exports: [ResipeListComponent, ResipeItemComponent, RecipeBackComponent],
  providers: []
=======
    RecipiesRoutingModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, RecipeBackComponent, RecipesComponent],
  exports: [RecipeListComponent, RecipeItemComponent, RecipeBackComponent]
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060
})
export class RecipesModule { }
