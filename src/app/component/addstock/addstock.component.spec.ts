import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockComponent } from './addstock.component';

describe('AddempComponent', () => {
  let component: AddstockComponent;
  let fixture: ComponentFixture<AddstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
