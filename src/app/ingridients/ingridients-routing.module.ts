import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngridientsListComponent } from './list/list.component';
import {AuthGuard} from '../core/guards/auth.guard';



const routes: Routes = [
  { path: 'ingridients', component: IngridientsListComponent, canActivate: [AuthGuard]},
];

export const IngridientRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
