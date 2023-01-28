import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphamainComponent } from './alphamain.component';

describe('AlphamainComponent', () => {
  let component: AlphamainComponent;
  let fixture: ComponentFixture<AlphamainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphamainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
