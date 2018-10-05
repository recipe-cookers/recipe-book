import {Component, OnInit } from '@angular/core';
import {UserLogin} from '../../shared/models/login.model';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = {} as UserLogin;
  submitted = false;

  onSubmit(e, loginForm) {
    this.submitted = true;
    this.auth.loginUser({...loginForm.value, token: loginForm.value.password}).subscribe(res => {
      this.auth.setToken(res.token);
      this.router.navigateByUrl('/');
    });
  }

  clearForm(loginForm) {
    console.log(loginForm);
    this.model = {} as UserLogin;
  }
  testButton() {
    const body = { 'name': 'name', 'email': 'name@test.com', 'password': '111111', 'password_confirmation': '111111' };
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json' );
    console.log(headers)
    return this.http.post('http://refrigerator-alevel.tk/api/auth/register', body, { headers: headers })
      .subscribe(
      data => { console.log(data); },
      err => { console.log(err); }
    );
  }
  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }


}
