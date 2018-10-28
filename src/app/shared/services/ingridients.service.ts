import { Ingridients } from '../products.data';
import {IngridientRes} from '../models/product.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';

@Injectable()
export class IngridientsService {
    ingridients: IngridientRes[];
    constructor(private http: HttpClient, private auth: AuthService) {

    }

    getIngridients(): IngridientRes[] {
      this.http.get<any> ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
    {headers: this.auth.AuthHeaders()}).subscribe(res => {this.ingridients = res; console.log(res) }, err => console.log(err));
      console.log(this.ingridients)
        return this.ingridients;
    }

    createIngridient(id: number, title: string, titleAmount: string, titleMeasure: string) {
        return this.http.post<any>
        ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
          {'ingredient_id': id, 'amount': titleAmount + ' ' + titleMeasure}, {headers: this.auth.AuthHeaders()});
    }

    deleteIngridient(ingridient: IngridientRes) {
        return this.http.delete<any>
        (`http://refrigerator-alevel.tk/api/refrigerator/ingredients/${ingridient.id}`, {headers: this.auth.AuthHeaders()});
    }

}
