import { Component, OnInit} from '@angular/core';
import { IngridientsService } from '../../shared/services/ingridients.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { IIngridient } from '../../shared/models/ingridient.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'ingridients-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [IngridientsService]
})
export class IngridientsFormComponent implements OnInit {

  addForm: FormGroup;
  rangeForm: FormGroup;

  title:string='';
  titleAmount:string='';
  titleMeasure:string='гр.';

  basicIngridient:Array<{id:number, name:string}>=[
    {id:0, name:"сахар"},
    {id:1, name:"свинина"},
    {id:2, name:"уксус"},
    {id:3, name:"яблоко"},
    {id:4, name:"оливковое масло"},
    {id:5, name:"перец"},
    {id:6, name:"помидор"}
  ];
  getIngridient:IIngridient;
  
 
  constructor(private ingridientsService:IngridientsService, public formBuilder: FormBuilder, 
    private http: HttpClient){  
    this.rangeForm = formBuilder.group({
      'ingridient' : new FormControl("", Validators.required),
      'list' : new FormControl('')
    }, {
      validator: this.specificValueInsideRange.bind(this)
    });
    this.addForm = formBuilder.group({
      'rangeForm': this.rangeForm,
    
    });
   
 }
 
 specificValueInsideRange(group: AbstractControl) {

  const selectedValue = this.basicIngridient.find(bas => bas.name == group.value.ingridient);
  if(!selectedValue) {
    return {
      outsideRange: true
    };
  }
}
 ngOnInit(){
//   this.http.get('user.json').subscribe((data:User) => this.user=data);
//  console.log(this.user);
}
 
  onSubmit(){
    this.ingridientsService.createIngridient(this.title, this.titleAmount, this.titleMeasure);
    this.rangeForm.reset();
  }
  
}

