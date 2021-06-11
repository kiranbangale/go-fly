import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public flightData!: any//Observable<FlightDataModel>;

  constructor(private flightService: FlightService, private store: Store<AppState>) { }

  ngOnInit() {

    // this.flightData = this.flightService.loadInitialData();
    this.store.select(state => state).subscribe(data => {
      this.flightData = data;
    });

  }

}
