import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  buttons: Array<{}> = [
    {name:'fridge', src1:'../../assets/img/fridge.png', src2:'../../assets/img/fridge2.png', url:'/ingridients',id:1},
    {name:'recipes', src1:'../../assets/img/recipe.png',src2:'../../assets/img/recipe1.png', url:'./recipies',id:2},
    {name:'profile', src1:'../../assets/img/chef1.png',src2:'../../assets/img/chef2.png', url:'./profile',id:3},
    {name:'logout',src1:'../../assets/img/exit.png',src2:'../../assets/img/exit1.png', url:'./start',id:4}
  ]
  constructor() { }

  ngOnInit() {
  }

}
