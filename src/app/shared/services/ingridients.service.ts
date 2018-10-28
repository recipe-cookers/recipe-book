import {IngridientRes} from '../models/product.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
@Injectable()
export class IngridientsService {
    ingridients: IngridientRes[];
    constructor(private http: HttpClient, private auth: AuthService) {

    }

    getIngridients(): Observable<any> {
      return this.http.get<any> ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
    {headers: this.auth.AuthHeaders()});
    }

    createIngridient(id: number, title: string, titleAmount: string, titleMeasure: string) {
        return this.http.post<any>
        ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
          {'ingredient_id': id, 'amount': titleAmount + ' ' + titleMeasure}, {headers: this.auth.AuthHeaders()});
    }

    deleteIngridient(id: number) {
        return this.http.delete<any>
        (`http://refrigerator-alevel.tk/api/refrigerator/ingredients/${id}`, {headers: this.auth.AuthHeaders()});
    }

}
