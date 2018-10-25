import { Ingridients } from '../products.data';
import { Ingridient } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class IngridientsService{
    ingridients:Ingridient[] =Ingridients;

    constructor(){
        
    }
   
    getIngridients():Ingridient[]{
        return this.ingridients;
    }

    createIngridient(title:string, titleAmount:string, titleMeasure:string){
        const ingridient = new Ingridient(title, titleAmount, titleMeasure);
        this.ingridients.push(ingridient);

    }

    deleteIngridient(ingridient:Ingridient){
        let index = this.ingridients.indexOf(ingridient);
        if(index>-1){
          this.ingridients.splice(index, 1);
        };
    }
    
}