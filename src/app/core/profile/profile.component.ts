import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ProfileService} from '../services/profile.service';
import {UserRegister} from '../../shared/models/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private prof: ProfileService) { }
  model = {} as UserRegister;
  user = this.auth.getUser().name;
  public errorEmail: string;
  public errorPass: string;
  public subEmail(e, changeEmailForm) {
    console.log(changeEmailForm.value);
    this.prof.EmailChange({...changeEmailForm.value}).subscribe(
      res => { console.log(res);
        this.auth.updateUserEmail(res.email, res.name); },
      err => { console.log(err); const x = JSON.stringify(err.error.errors.email); console.log(x); this.errorEmail = x.slice(2, -2);
      console.log(this.errorEmail); });
  }
  public subName(e, changeNameForm) {
    console.log(changeNameForm.value);
    this.prof.NameChange({...changeNameForm.value}).subscribe(
      res => { console.log(res);
        this.auth.updateUserEmail(res.email, res.name); },
      err => { console.log(err); const x = JSON.stringify(err.error.errors.email); console.log(x); this.errorEmail = x.slice(1, -1);
        console.log(this.errorEmail); });
  }
  public subPass(e, changePassForm) {
    console.log(changePassForm.value);
    this.prof.PasswordChange({...changePassForm.value}).subscribe(
      res => { console.log(res);
        this.auth.updateUserPass(res.password); },
      err => { console.log(err); const x = JSON.stringify(err.error.errors.password); this.errorPass = x.slice(1, -1);
        console.log(this.errorPass); });
  }
  ngOnInit() {
  }

}
