import { Component, OnInit } from '@angular/core';
import { FlightDataModel } from 'src/app/models/flight/flights.model';
import { FlightService } from 'src/app/services/flight.service';
import { take } from 'rxjs/operators';
import * as fromAppSelectors from "../../state/app.selector";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { GetFlightData } from 'src/app/state/app.actions';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public data!: FlightDataModel;

  constructor(private flightService: FlightService, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.flightService.loadInitialData()
      .pipe(take(1))
      .subscribe((data: FlightDataModel) => {
        this.data = data;
        console.log(data)
      });

  }

}
