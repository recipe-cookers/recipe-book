import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  buttons: Array<{}> = [
    {name:'fridge', src:'../../assets/img/fridge.png', url:'/ingridients'},
    {name:'recipes', src:'../../assets/img/recipe.png', url:'./recipies'},
    {name:'profile', src:'../../assets/img/user.png',url:'./profile'},
    {name:'logout',src:'../../assets/img/exit.png', url:'./start'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
