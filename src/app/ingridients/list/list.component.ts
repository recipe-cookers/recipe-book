import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { Ingridients } from '../../shared/products.data';
import {IngridientRes} from '../../shared/models/product.model';

@Component({
  selector: 'ingridients-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class IngridientsListComponent implements OnInit {
 ingridients: IngridientRes[];

 constructor(private ingridientsService: IngridientsService) {
   this.ingridients = this.ingridientsService.getIngridients();
   console.log(this.ingridients);
 }

 ngOnInit() {
   console.log('hey!');
}

  delete(ingridient: IngridientRes) {
    this.ingridientsService.deleteIngridient(ingridient);
  }


}
