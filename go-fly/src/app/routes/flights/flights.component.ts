import { Component, OnInit } from '@angular/core';
import { FlightDataModel } from 'src/app/models/flight/flights.model';
import { FlightService } from 'src/app/services/flight.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public flightData!: Observable<FlightDataModel>;

  constructor(private flightService: FlightService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.flightData = this.flightService.loadInitialData();
  }

}
