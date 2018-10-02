import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const Exports = [PageNotFoundComponent];
const Components = [PageNotFoundComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RegistrationComponent, LoginComponent, ProfileComponent],
  declarations: [RegistrationComponent, LoginComponent, ProfileComponent]
})
export class CoreModule { }
