import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alphatest2Component } from './alphatest2.component';

describe('Alphatest2Component', () => {
  let component: Alphatest2Component;
  let fixture: ComponentFixture<Alphatest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alphatest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alphatest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
