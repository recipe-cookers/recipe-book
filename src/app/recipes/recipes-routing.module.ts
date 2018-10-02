import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResipeListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'recipes', component: ResipeListComponent},
 
  
  
];

export const RecipesRouterModule: ModuleWithProviders = RouterModule.forChild(routes);