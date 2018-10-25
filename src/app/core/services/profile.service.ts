import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class ProfileService {
  constructor(private auth: AuthService, private http: HttpClient) {}
  public EmailNameChange(form) {
    return this.http
      .put<any>
      ('http://refrigerator-alevel.tk/api/auth/user',
        {'name': form.name, 'email': form.email}, {headers: this.auth.AuthHeaders()});
  }
  public PasswordChange(form) {
    return this.http
      .put<any>
      ('http://refrigerator-alevel.tk/api/auth/user/password',
        {form}, {headers: this.auth.AuthHeaders()});
  }

}
