import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  ngOnInit() {
    console.log('app works');
    console.log(this.router.url);
  }
  ngOnChanges() {
    console.log(this.router.url);
  }
  constructor(private router: Router) {}
}
