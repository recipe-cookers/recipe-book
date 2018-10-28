import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { HttpIngridient } from '../../shared/services/basicIngridient.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { BasicIngridient } from '../../shared/models/basicIngridient.model';
import {IngridientsListComponent} from '../list/list.component';


@Component({
  selector: 'ingridients-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [IngridientsService, IngridientsListComponent]
})
export class IngridientsFormComponent implements OnInit {

  addForm: FormGroup;
  rangeForm: FormGroup;

  title = '';
  titleAmount = '';
  titleMeasure = 'гр.';
  id: any;
  basicIngridient: BasicIngridient[] = [];

  constructor(private ingridientsService: IngridientsService, public formBuilder: FormBuilder,
    private httpService: HttpIngridient) {

    this.rangeForm = formBuilder.group({
      'ingridient' : new FormControl('', Validators.required),
      'list' : new FormControl('')
    }, {
      validator: this.specificValueInsideRange.bind(this)
    });
    this.addForm = formBuilder.group({
      'rangeForm': this.rangeForm,

    });

 }

 specificValueInsideRange(group: AbstractControl) {

  const selectedValue = this.basicIngridient.find(bas => bas.name === group.value.ingridient);
   if (!selectedValue) {
     return {
       outsideRange: true
     };
   }
}
 ngOnInit() {
  this.httpService.getData().subscribe(data => this.basicIngridient = data['ingredients']);

}

  onSubmit() {
    this.id = this.basicIngridient.find(x => x.name === this.title )
    this.ingridientsService.createIngridient(this.id.id, this.title, this.titleAmount, this.titleMeasure)
      .subscribe(
      res => console.log(res), err => console.log(err)
    );
    this.rangeForm.reset({ingridient: ''});
  }

}

