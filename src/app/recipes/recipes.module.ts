import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/list.component';
import { RecipeItemComponent } from './item/item.component';
import { RecipiesRoutingModule} from './recipies-routing.module';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../shared/pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    RecipiesRoutingModule,
    FormsModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, SearchPipe],
  exports: [RecipeListComponent, RecipeItemComponent]
})
export class RecipesModule { }
