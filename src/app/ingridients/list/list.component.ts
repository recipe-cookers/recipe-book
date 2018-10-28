import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import {IngridientRes} from '../../shared/models/product.model';


@Component({
  selector: 'ingridients-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class IngridientsListComponent implements OnInit {
 ingridients$: IngridientRes[];

 constructor(private ingridientsService: IngridientsService) {
 }
 getData() {
   this.ingridientsService.getIngridients().subscribe(res => {this.ingridients$ = res.ingredients; });
   console.log(this.ingridients$);
 }

 ngOnInit() {
   console.log('hey!');
   this.getData();
}


  delete(ingridient: IngridientRes) {
    this.ingridientsService.deleteIngridient(ingridient.id).subscribe(res => console.log(res));
    this.getData();
  }


}
