import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFlightResultsComponent } from './sort-flight-results.component';

describe('SortFlightResultsComponent', () => {
  let component: SortFlightResultsComponent;
  let fixture: ComponentFixture<SortFlightResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortFlightResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortFlightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
