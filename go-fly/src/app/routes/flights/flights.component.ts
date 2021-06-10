import { Component, OnInit } from '@angular/core';
import { FlightDataModel } from 'src/app/models/flight/flights.model';
import { FlightService } from 'src/app/services/flight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public flightData!: Observable<FlightDataModel>;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightData = this.flightService.loadInitialData()
    console.log(this.flightData)
  }

}
