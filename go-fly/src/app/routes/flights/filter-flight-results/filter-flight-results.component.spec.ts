import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFlightResultsComponent } from './filter-flight-results.component';

describe('FilterFlightResultsComponent', () => {
  let component: FilterFlightResultsComponent;
  let fixture: ComponentFixture<FilterFlightResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFlightResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFlightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
