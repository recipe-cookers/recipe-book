import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IRecipe} from '../models/recipe.model';
import {recipies} from '../../../mock';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor() { }

  getRecipies(): Observable<IRecipe[]> {
    return of(recipies);
  }

  getRecipe(id: number | string) {
    return this.getRecipies().pipe(
      // (+) before `id` turns the string into a number
      map((r: IRecipe[]) => r.find(n => n.id === +id))
    );
  }
}
