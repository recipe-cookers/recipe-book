import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IngridientsService} from '../../shared/services/ingridients.service';

@Component({
  selector: 'app-reccomended',
  templateUrl: './reccomended.component.html',
  styleUrls: ['./reccomended.component.scss']
})
export class ReccomendedComponent implements OnInit {
  constructor(private ingr: IngridientsService) { }
  public recipies = [];
  public searchText: string;
  @Output() buttonPressed = new EventEmitter<Object>();
  // search id from all recipes func
  clickHandler(id) {
    this.buttonPressed.emit(this.recipies.filter(x => x.id === id));
  }
  ngOnInit() {
    this.ingr.getRecipes()
      .subscribe(res => {this.recipies = res.data; console.log(res);}, err => console.log(err));
    // console.log(recipies);
  }
}
