import { Component} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { Ingridient } from '../../shared/models/product.model';

@Component({
  selector: 'ingridients-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [IngridientsService]
})
export class IngridientsFormComponent  {

  title:string='';
  titleAmount:string='';
  titleMeasure:string='гр.';
  
  constructor(private ingridientsService:IngridientsService){  
 }
 
  onSubmit(){
    this.ingridientsService.createIngridient(this.title, this.titleAmount, this.titleMeasure);
  }
  
}
