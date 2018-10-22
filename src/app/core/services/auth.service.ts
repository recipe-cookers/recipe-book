import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  public headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json' );
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public setToken(token): void {
    return localStorage.setItem('token', token);
  }
  public setUser(user): void {
    return localStorage.setItem('currentUser', JSON.stringify(user));
  }
  public logOut(): void {
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
