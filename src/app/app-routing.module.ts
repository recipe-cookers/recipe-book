import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start/start.component';
import {IngridientsComponent} from './ingridients/ingridients.component';
import {RegistrationComponent} from './core/registration/registration.component';
import {LoginComponent} from './core/login/login.component';
import {ProfileComponent} from './core/profile/profile.component';
import {RecipeListComponent} from './recipes/list/list.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'ingridients', component: IngridientsComponent, canActivate: [AuthGuard]},
  { path: 'recipies', component: RecipeListComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: '**',   redirectTo: '/start', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

