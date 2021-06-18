import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public flights!: any;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(state => state).subscribe(data => {
      this.flights = data;
    });
  }

  sortBy() {
    this.router.navigate(['flights/sortFlights']);
  }

  filter() {
    this.router.navigate(['flights/filterFlights']);
  }

}
