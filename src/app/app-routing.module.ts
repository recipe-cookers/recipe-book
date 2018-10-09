import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start/start.component';
import {IngridientsComponent} from './ingridients/ingridients.component';
import {DetailsComponent} from './details/details.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RegistrationComponent} from './core/registration/registration.component';
import {LoginComponent} from './core/login/login.component';
import {ProfileComponent} from './core/profile/profile.component';

export const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'ingridients', component: IngridientsComponent},
  { path: 'recipies', component: RecipesComponent},
  { path: 'details', component: DetailsComponent},
  { path: '**',   redirectTo: '/start', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

