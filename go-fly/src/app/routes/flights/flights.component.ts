import { Component, OnInit } from '@angular/core';
import { SearchFlightModel } from 'src/app/models/flight/flights.model';

import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public flightData!: any;
  public searchFlightForm = new SearchFlightModel('', '', '', '', { count: 0, type: '' }, '');

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select(state => state).subscribe(data => {
      this.flightData = data;
    });

  }

  onSubmit(searchFlightForm: any) {
    console.log(searchFlightForm);
  }

}
