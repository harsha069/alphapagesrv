import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alphatest3Component } from './alphatest3.component';

describe('Alphatest3Component', () => {
  let component: Alphatest3Component;
  let fixture: ComponentFixture<Alphatest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alphatest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alphatest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
