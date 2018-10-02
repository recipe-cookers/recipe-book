import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routesMain: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    {path: 'start', loadChildren:'./start/start.module#StartModule' },
    {path: 'ingridients', loadChildren:'./ingridients/ingridients.module#IngridientsModule' },
    {path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule' },
    {path: 'details', loadChildren:'./details/details.module#DetailsModule' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesMain)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}