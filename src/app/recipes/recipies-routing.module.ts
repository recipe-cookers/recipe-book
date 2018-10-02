import {RecipeListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeItemComponent} from './item/item.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'recipies', component: RecipeListComponent, pathMatch: 'full'},
  { path: 'recipies/:id', component: RecipeItemComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipiesRoutingModule { }
