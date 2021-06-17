import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TABS } from 'src/app/constants/tabs.const';
import { CurrentTab } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-filter-flight-results',
  templateUrl: './filter-flight-results.component.html',
  styleUrls: ['./filter-flight-results.component.scss']
})
export class FilterFlightResultsComponent implements OnInit {

  minPrice: number = 0;
  maxPrice: number = 100;
  bookingClass: any;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new CurrentTab(TABS.FILTER_FLIGHTS));

    this.bookingClass = [
      { id: 1, label: 'Economy (199)', price: '$145' },
      { id: 2, label: 'First class (199)', price: '$416' }
    ]
  }

  filter(): void {
    this.router.navigate(['flights/searchResult']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new CurrentTab(''));
  }

}
