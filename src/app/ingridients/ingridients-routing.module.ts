import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngridientsListComponent } from './list/list.component';



const routes: Routes = [
  { path: 'ingridients', component: IngridientsListComponent},
 
  
  
];

export const IngridientRouterModule: ModuleWithProviders = RouterModule.forChild(routes);