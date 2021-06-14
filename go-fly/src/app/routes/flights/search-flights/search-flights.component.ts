import { Component, OnInit } from '@angular/core';
import { SearchFlightModel } from 'src/app/models/flight/flights.model';
import * as moment from 'moment';

import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements OnInit {

  public flightData!: any;
  public searchFlightForm = new SearchFlightModel('', '', '', '', { count: 1, type: '' }, '');
  public minDate = moment(new Date()).format('YYYY-MM-DD');
  public maxDate = moment(new Date()).add(3, 'months').format('YYYY-MM-DD');

  constructor(
    private flightService: FlightService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.store.select(state => state).subscribe(data => {
      this.flightData = data;
    });

  }

  onSubmit(searchFlightForm: any) {
    this.flightService.searchResults(searchFlightForm, this.flightData);
    this.router.navigate(['flights/searchResult']);
  }

}
