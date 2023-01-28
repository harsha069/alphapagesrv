import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABOUTRESUMEComponent } from './about-resume.component';

describe('ABOUTRESUMEComponent', () => {
  let component: ABOUTRESUMEComponent;
  let fixture: ComponentFixture<ABOUTRESUMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABOUTRESUMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABOUTRESUMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
