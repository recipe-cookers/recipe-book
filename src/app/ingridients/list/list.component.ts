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
onSubmit() {
   this.ingridientsService.getRecipes()
     .subscribe(res => console.log(res), err => console.log(err));
}
 ngOnInit() {
   this.ingridients = this.ingridientsService.getIngridients();
}


  delete(ingridient: IngridientRes) {
    this.ingridientsService.deleteIngridient(ingridient);
  }


}
