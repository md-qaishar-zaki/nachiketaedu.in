import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeFeatureComponent } from './awesome-feature.component';

describe('AwesomeFeatureComponent', () => {
  let component: AwesomeFeatureComponent;
  let fixture: ComponentFixture<AwesomeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
