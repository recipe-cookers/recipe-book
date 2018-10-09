import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { Ingridient } from '../../shared/models/product.model';
import { ingridients } from '../../shared/products.data';

@Component({
  selector: 'ingridients-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
 
})
export class IngridientsListComponent implements OnInit {
 ingridients:Ingridient[];

 constructor(private ingridientsService:IngridientsService){
    this.ingridients = [];
 }

 ngOnInit(){
  this.ingridients =this.ingridientsService.getIngridients();
  
}

  delete(ingridient:Ingridient){
    this.ingridientsService.deleteIngridient(ingridient);
  }
     

}
