import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent},
 
  
  
];

export const RecipesRouterModule: ModuleWithProviders = RouterModule.forChild(routes);