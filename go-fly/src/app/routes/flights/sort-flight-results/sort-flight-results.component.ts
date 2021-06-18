import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TABS } from 'src/app/constants/tabs.const';
import { FlightService } from 'src/app/services/flight.service';
import { CurrentTab } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-sort-flight-results',
  templateUrl: './sort-flight-results.component.html',
  styleUrls: ['./sort-flight-results.component.scss']
})
export class SortFlightResultsComponent implements OnInit, OnDestroy {

  sortOptions: any;
  sortBy: any;

  constructor(
    private store: Store<AppState>,
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new CurrentTab(TABS.SORT_FLIGHTS));

    this.sortOptions = [
      {
        id: 1,
        label: 'Price (Lowest to Highest)'
      },
      {
        id: 2,
        label: 'Price (Highest to Lowest)'
      },
      {
        id: 3,
        label: 'Duration (Shortest to Longest)'
      },
      {
        id: 4,
        label: 'Duration (Longest to Shortest)'
      },
      {
        id: 5,
        label: 'Departure (Earliest to Latest)'
      },
      {
        id: 6,
        label: 'Arrival (Earliest to Latest)'
      },
      {
        id: 7,
        label: 'Airline (A to Z)'
      },
      {
        id: 8,
        label: 'Airline (Z to A)'
      }
    ];
  }

  sort(): void {
    this.flightService.sortResults(this.sortBy);
    this.router.navigate(['flights/searchResult']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new CurrentTab(''));
  }

}
