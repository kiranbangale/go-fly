import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetFlightData } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) { }
  ngOnInit() {
    this.store.dispatch(new GetFlightData());
  }
}
