import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingClass = [
      { id: 1, label: 'Economy (199)', price: '$145' },
      { id: 2, label: 'First class (199)', price: '$416' }
    ]
  }

  filter(): void {
    this.router.navigate(['flights/searchResult']);
  }

}
