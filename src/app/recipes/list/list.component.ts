import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'resipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ResipeListComponent implements OnInit {

  constructor() { }
  public ItemRecipe = [
    {
      id: 1,
      title: 'Fried Potato',
      photo: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611618540.jpeg',
      description: 'Cut the whole chickens into 4 breasts, 4 thighs, 4 legs and 4 wings and set aside.\n' +
      '\n' +
      'Preheat your oil, in either a heavy pan on the stove or a deep-fryer, to 325 degrees F.\n' +
      '\n' +
      'In a large bowl, combine the flour, salt, black pepper, garlic powder, onion powder and cayenne pepper until thoroughly mixed. Set aside.\n' +
      '\n' +
      'Pour the buttermilk into another bowl large enough for the chicken to be immersed in the buttermilk.\n' +
      '\n' +
      'Prepare your dredging station. Place your chicken in a bowl. Next to that, your bowl of buttermilk, and next to that, your dry mixture.\n' +
      '\n' +
      'Take your breasts, lightly dust them with your flour mixture, then dip them in the buttermilk until they are coated, and then place them in the flour mixture.\n' +
      '\n' +
      'Take the breasts that are in the flour mixture and aggressively push the flour mixture into the wet chicken. Make sure that the chicken in very thoroughly coated, or you will not achieve the crust and crunch you are looking for. Gently place the breasts in your hot oil.\n' +
      '\n' +
      'Next, repeat the dredging steps with your other pieces of chicken in this order: thigh, leg then wing.\n' +
      '\n' +
      'When you place the last wing into the fryer, you should have 16 pieces of chicken in the oil. Set a timer for 15 minutes.\n' +
      '\n' +
      'After 15 minutes, take a probe thermometer and check the temperature of a breast. If it reads 180 degrees F, all of your chicken is done. (Keep in mind that it will continue to cook after it has been removed from the fryer.)\n' +
      '\n' +
      'Remove the chicken from the oil and let it drain for 5 minutes. Let cool for an additional 10 minutes before serving.',
      requiredIngridients:[
        {
          ingridient: 'potato',
          amountOfIngridient: 500
        },
        {
          ingridient: 'tomato',
          amountOfIngridient: 200
        }
        ],
      availableIngridients:['potato', 'meat']
    },
    {
      id: 2,
      title: 'Fried Potato',
      photo: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611618540.jpeg',
      description: 'fff',
      requiredIngridients:[
        {
          ingridient: 'potato',
          amountOfIngridient: 500
        },
        {
          ingridient: 'tomato',
          amountOfIngridient: 200
        }
      ],
      availableIngridients:['potato', 'meat']
    }
  ];
  ngOnInit() {
  }

}
