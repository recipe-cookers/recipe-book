import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start/start.component';
import {IngridientsComponent} from './ingridients/ingridients.component';
import {DetailsComponent} from './details/details.component';
import {RecipesComponent} from './recipes/recipes.component';

export const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'ingridients', component: IngridientsComponent},
  { path: 'recipies', component: RecipesComponent},
  { path: 'details', component: DetailsComponent},
  { path: '**',   redirectTo: '/details', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

