import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/list.component';
import { RecipeItemComponent } from './item/item.component';
import { RecipiesRoutingModule} from './recipies-routing.module';
import {SearchComponent} from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    RecipiesRoutingModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, SearchComponent],
  exports: [RecipeListComponent, RecipeItemComponent, SearchComponent]
})
export class RecipesModule { }
