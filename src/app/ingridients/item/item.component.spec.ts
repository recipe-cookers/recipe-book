import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientsItemComponent } from './item.component';

describe(' IngridientsItemComponent', () => {
  let component:  IngridientsItemComponent;
  let fixture: ComponentFixture< IngridientsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  IngridientsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( IngridientsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
