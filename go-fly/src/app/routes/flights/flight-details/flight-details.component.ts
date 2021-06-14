import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  @Input() details: any;

  constructor() { }

  ngOnInit(): void {
  }

}
