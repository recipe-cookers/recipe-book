import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class ProfileService {
  constructor(private auth: AuthService, private http: HttpClient) {}
  public EmailChange(form) {
    return this.http
      .put<any>
      ('http://refrigerator-alevel.tk/api/auth/user',
        {'email': form.email}, {headers: this.auth.AuthHeaders()});
  }
  public NameChange(form) {
    return this.http
      .put<any>
      ('http://refrigerator-alevel.tk/api/auth/user',
        {'name': form.name}, {headers: this.auth.AuthHeaders()});
  }
  public PasswordChange(form) {
    return this.http
      .put<any>
      ('http://refrigerator-alevel.tk/api/auth/user/password',
        {'old_password': form.old_password, 'password': form.password, 'password_confirmation': form.password_confirmation},
        {headers: this.auth.AuthHeaders()});
  }

}
