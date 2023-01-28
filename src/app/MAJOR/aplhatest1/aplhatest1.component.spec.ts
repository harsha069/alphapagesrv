import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aplhatest1Component } from './aplhatest1.component';

describe('Aplhatest1Component', () => {
  let component: Aplhatest1Component;
  let fixture: ComponentFixture<Aplhatest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aplhatest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aplhatest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
