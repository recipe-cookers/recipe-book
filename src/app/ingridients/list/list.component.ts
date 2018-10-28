import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { IngridientRes } from '../../shared/models/product.model';

@Component({
  selector: 'ingridients-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class IngridientsListComponent implements OnInit {
 ingridients: IngridientRes[];

 constructor(private ingridientsService: IngridientsService) {
    this.ingridients = [];

 }
 // getData() {
 //   this.ingridientsService.getIngridientsFromServer().subscribe(res => {this.ingridients$ = res.ingredients; console.log(res.ingredients) });
 //   console.log(this.ingridients$);
 // }

 ngOnInit() {
   this.ingridients = this.ingridientsService.getIngridients();
   console.log('hey!');
   console.log(this.ingridients);
}


  delete(ingridient: IngridientRes) {
    this.ingridientsService.deleteIngridient(ingridient);
      // .subscribe(res => console.log(res));
  }


}
