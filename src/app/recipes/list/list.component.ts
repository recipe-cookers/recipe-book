import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRecipe} from '../../shared/models/recipe.model';
import {Router} from '@angular/router';


@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  public ItemRecipe: IRecipe[] = [
    {
      id: 1,
      name: 'Fried Potato',
      description: 'Картошку берите крупную и крахмалистую. Крахмал при тепловой обработке даст сладость, которая очень гармонирует с грибами. Нередко для жарки используется менее крахмалистый картофель, потому что он не рассыпается. Но крахмалистая вкуснее, и надо просто готовить ее особым образом — увидите как.\n' +
      '\n' +
      'Вы можете нарезать картошку как хотите. Расскажу, как делаю я. Срезаю с двух длинных сторон первые, скругленные сверху ломтики, и откладываю их: теперь картошку можно поставить на длинный срез и она не будет кататься. Затем я нарезаю ее длинными брусками с палец толщиной, на манер картошки фри.\n' +
      '\n' +
      'Рассуждать о пропорциях картофеля и грибов сложно, все делают, как любят, в зависимости от бюджета или от того, сколько грибов собрали в лесу. Я бы взял картофеля в два раза больше, чем грибов, исходя из их сухого веса.',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611618540.jpeg',
      ingridients: [{id: 1, name: 'Kartoshka', amount: 4, measure: 'kruzhka'}]
    }
  ];
  @Output() buttonPressed = new EventEmitter<Object>();
  clickHandler(id) {
    this.buttonPressed.emit(this.ItemRecipe.filter(x => x.id === id));
  }
  ngOnInit() {
  }

}
