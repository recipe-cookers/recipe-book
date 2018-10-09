import {Component, OnInit} from '@angular/core';
import {IRecipe} from '../../shared/models/recipe.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RecipeService} from '../../shared/services/recipe.service';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'recipe-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecipeService
  ) { }
  recipe$: Observable<IRecipe>;
  ngOnInit() {
    this.recipe$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRecipe(params.get('id')))
    );
  }
  gotoRecipeList(recipe: IRecipe) {
    const recipeId = recipe ? recipe.id : null;
    // Pass along the recipe id if available
    // so that the RecipeList component can select that recipe.
    this.router.navigate(['/recipies']);
  }
}
