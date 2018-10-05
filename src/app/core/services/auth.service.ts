import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public setToken(token): void {
    return localStorage.setItem('token', token);
  }
  public loginUser(form) {
    return this.http
      .post<{email: string, password: string, token: string}>('http://refrigerator-alevel.tk/api/auth/login', form);
  }
  public registerUser(form) {
    return this.http
      .post<{name: string, email: string, password: string, password_confirmation: string}>
      ('http://refrigerator-alevel.tk/api/auth/register', form);
  }
}
