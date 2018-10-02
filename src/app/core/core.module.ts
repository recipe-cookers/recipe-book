import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
=======
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060


const Exports = [PageNotFoundComponent];
const Components = [PageNotFoundComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
<<<<<<< HEAD
  declarations: Components,
  exports:Exports
=======
  exports: [RegistrationComponent, LoginComponent, ProfileComponent],
  declarations: [RegistrationComponent, LoginComponent, ProfileComponent]
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060
})
export class CoreModule { }
