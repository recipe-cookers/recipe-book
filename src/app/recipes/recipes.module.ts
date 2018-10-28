import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/list.component';
import { RecipeItemComponent } from './item/item.component';
import { RecipiesRoutingModule} from './recipies-routing.module';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../shared/pipes/search.pipe';
import {ReccomendedComponent} from './reccomended/reccomended.component';

@NgModule({
  imports: [
    CommonModule,
    RecipiesRoutingModule,
    FormsModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, ReccomendedComponent, SearchPipe],
  exports: [RecipeListComponent, RecipeItemComponent, ReccomendedComponent]
})
export class RecipesModule { }
