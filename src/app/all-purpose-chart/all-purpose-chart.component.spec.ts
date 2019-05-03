import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurposeChartComponent } from './all-purpose-chart.component';

describe('AllPurposeChartComponent', () => {
  let component: AllPurposeChartComponent;
  let fixture: ComponentFixture<AllPurposeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurposeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurposeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
