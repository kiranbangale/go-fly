import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  title: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state => state).subscribe(data => {
      this.title = data;
    });

  }

}
