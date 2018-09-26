import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../../shared/models/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  constructor() { }
  @Input() recipe: IRecipe;
  ngOnInit() {
    console.log(this.recipe);
  }

}
