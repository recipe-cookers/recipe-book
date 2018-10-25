import {Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';

@Injectable()
export class HttpIngridient {

    constructor(private http: HttpClient, public authService: AuthService) {

    }

     public headers = new HttpHeaders()
     .append('Accept', 'application/json')
     .append('Authorization', 'Bearer' + this.authService.getToken());


    getData() {
      return this.http.get<any>('http://refrigerator-alevel.tk/api/ingredients', {headers: this.headers});
    }

}
