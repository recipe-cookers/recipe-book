import {IIngridient} from './ingridient.model';

export interface IRecipe {
  id: number;
  name: string;
  description: string;
  image: string;
  ingridients: IIngridient[];
}
