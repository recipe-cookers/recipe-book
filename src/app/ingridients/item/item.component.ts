import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IngridientRes} from '../../shared/models/product.model';

@Component({
  selector: 'ingridients-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class IngridientsItemComponent implements OnInit {

@Input() product: IngridientRes;

@Output() delete = new EventEmitter();

onDelete() {
  this.delete.emit(this.product);
}

  constructor() { }

  ngOnInit() {
  }

}
