import {RecipeListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeItemComponent} from './item/item.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../core/guards/auth.guard';
import {ReccomendedComponent} from './reccomended/reccomended.component';

const routes: Routes = [
  { path: 'recipies', component: RecipeListComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'recipies/:id', component: RecipeItemComponent},
  { path: 'recommended', component: ReccomendedComponent},
  { path: 'recommended/:id', component: RecipeItemComponent}
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
