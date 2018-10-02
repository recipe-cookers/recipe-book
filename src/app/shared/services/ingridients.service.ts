import { ingridients } from '../products.data';
import { Ingridient } from '../models/product.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IngridientsService{
    ingridients:Ingridient[] =ingridients;

    constructor(private http:HttpClient){
        
    }
 

    getIngridients():Ingridient[]{
        return this.ingridients;
    }

    createIngridient(title:string, titleAmount:string, titleUnit:string){
        const ingridient = new Ingridient(title, titleAmount, titleUnit);
        this.ingridients.push(ingridient);

    }

    deleteIngridient(ingridient:Ingridient){
        let index = this.ingridients.indexOf(ingridient);
        if(index>-1){
          this.ingridients.splice(index, 1);
        };
    }
    
}