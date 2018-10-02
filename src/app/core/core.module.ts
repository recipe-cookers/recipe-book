import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RegistrationComponent, LoginComponent, ProfileComponent],
  declarations: [RegistrationComponent, LoginComponent, ProfileComponent]
})
export class CoreModule { }
