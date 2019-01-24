import {Component, OnInit } from '@angular/core';
import {UserLogin} from '../../shared/models/login.model';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = {} as UserLogin;
  submitted = false;
  public errorEmail: string;
  public errorPass: string;
  onSubmit(e, loginForm) {
    // console.log(loginForm.value);
    this.submitted = true;
    this.auth.loginUser({...loginForm.value}).subscribe(res => {
      // console.log(res);
      this.auth.setToken(res.access_token);
      this.auth.setUser(res.user);
      this.router.navigateByUrl('/ingridients');
    }, err => {
      this.errorPass = 'The given data is invalid!';
    // console.log(err);
      }
    );
  }
  clearForm(loginForm) {
    console.log(loginForm);
    this.model = {} as UserLogin;
  }
  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


}
