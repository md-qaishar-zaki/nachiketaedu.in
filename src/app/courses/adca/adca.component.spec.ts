import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcaComponent } from './adca.component';

describe('AdcaComponent', () => {
  let component: AdcaComponent;
  let fixture: ComponentFixture<AdcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
