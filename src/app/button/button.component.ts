import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../core/services/auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() data: {name: string, src1: string, src2: string, url: string, id: number};
  display1 = 'active';
  display2 = 'none';
  display3 = 'text1';
  onClick() {
    if (this.data.url === '/start') {
      this.auth.logOut();
    }
  }
  onMouseOver() {
    this.display1 = 'none';
    this.display2 = 'active';
    this.display3 = '';
  }
  onMouseOut() {
    this.display1 = 'active';
    this.display2 = 'none';
    this.display3 = 'text1';

  }


  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

}
