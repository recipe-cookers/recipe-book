import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientsFormComponent } from './form.component';

describe('IngridientsFormComponent', () => {
  let component: IngridientsFormComponent;
  let fixture: ComponentFixture<IngridientsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngridientsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngridientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
