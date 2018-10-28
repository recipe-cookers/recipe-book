import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  public user = this.getUser();
  public headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json' );
  public AuthHeaders() {
    return this.headers
      .append('Authorization', `Bearer ${this.getToken()}`);
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public setToken(token): void {
    return localStorage.setItem('token', token);
  }
  public setUser(user): void {
    return localStorage.setItem('currentUser', JSON.stringify(user));
  }
  public updateUserEmail(email, name) {
    this.user.name = name;
    this.user.email = email;
    this.setUser(this.user);
  }
  public updateUserPass(pass) {
    this.user.password = pass;
    this.setUser(this.user);
  }
  public getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  public logOut(): void {
    localStorage.removeItem('fridge');
    return localStorage.removeItem('currentUser');
  }
  public loginUser(form) {
    return this.http
      .post<any>
      ('http://refrigerator-alevel.tk/api/auth/login', form, {headers: this.headers});
  }
  public registerUser(form) {
    return this.http
      .post<any>
      ('http://refrigerator-alevel.tk/api/auth/register', form, {headers: this.headers});
  }
}
