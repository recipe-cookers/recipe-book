import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {ProfileService} from './services/profile.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [RegistrationComponent, LoginComponent, ProfileComponent, PageNotFoundComponent],
  declarations: [RegistrationComponent, LoginComponent, ProfileComponent, PageNotFoundComponent],
  providers: [AuthService, AuthGuard, ProfileService]
})
export class CoreModule { }
