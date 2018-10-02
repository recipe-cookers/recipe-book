import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionComponent } from './description/description.component';


const routes: Routes = [
  { path: 'details', component: DescriptionComponent},
  
  
  
];

export const DetailsRouterModule: ModuleWithProviders = RouterModule.forChild(routes);