import { Component, OnInit } from '@angular/core';
import {UserRegister} from '../../shared/models/login.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model = {} as UserRegister;
  constructor(private auth: AuthService, private router: Router, private http: HttpClient) {};
  submitted = false;

  onSubmit(e, registerForm) {
    this.submitted = true;
    this.auth.registerUser({registerForm}).subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
  ngOnInit() {
  }

}
