import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientsListComponent } from './list.component';

describe('IngridientsListComponent', () => {
  let component: IngridientsListComponent;
  let fixture: ComponentFixture<IngridientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngridientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngridientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
