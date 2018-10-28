import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {recipies} from '../../../mock' ;

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  public recipies = recipies;
  public searchText: string;
  @Output() buttonPressed = new EventEmitter<Object>();
  // search id from all recipes func
  clickHandler(id) {
    this.buttonPressed.emit(this.recipies.filter(x => x.id === id));
  }
  ngOnInit() {
    console.log(recipies);
  }

}
