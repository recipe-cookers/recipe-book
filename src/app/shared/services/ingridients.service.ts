import { Ingridients } from '../products.data';
import { IngridientRes } from '../models/product.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
@Injectable()
export class IngridientsService {
    ingridients: IngridientRes[] = Ingridients;
    constructor(private http: HttpClient, private auth: AuthService) {
      // this.getIngridientsFromServer().subscribe(res => {this.ingridients = res.ingredients; console.log(this.ingridients); });
    }


    getIngridients(): IngridientRes[] {
      console.log(this.ingridients);
      return this.ingridients;
    }

  getIngridientsFromServer(): Observable<any> {
      return this.http.get<any> ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
    {headers: this.auth.AuthHeaders()});
    }


    createIngridient(id: number, title: string, titleAmount: string, titleMeasure: string) {
      const ingridient = new IngridientRes(id, title, titleAmount + ' ' + titleMeasure);
      this.ingridients.push(ingridient);
      console.log(this.ingridients);
        return this.http.post<any>
        ('http://refrigerator-alevel.tk/api/refrigerator/ingredients',
          {'ingredient_id': id, 'amount': titleAmount + ' ' + titleMeasure}, {headers: this.auth.AuthHeaders()})
          .subscribe(res => console.log(res) );
    }

    deleteIngridient(ingridient: IngridientRes) {
      const index = this.ingridients.indexOf(ingridient);
      if (index > -1) {
        this.ingridients.splice(index, 1);
      }
      console.log(this.ingridients);
      return this.http.delete<any>
        (`http://refrigerator-alevel.tk/api/refrigerator/ingredients/${ingridient.id}`, {headers: this.auth.AuthHeaders()})
        .subscribe(res => console.log(res));
    }

}
