import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
];

export const StartRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
