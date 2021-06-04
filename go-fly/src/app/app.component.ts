import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go-fly';
  public data: Observable<any>[];

  constructor(data: AngularFireDatabase) {
    this.data = []
    const item: AngularFireList<any> = data.list('airports');
    item.valueChanges().subscribe(
      x => { this.data = x; }
    );
  }
}
