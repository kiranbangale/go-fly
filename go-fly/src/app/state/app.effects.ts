import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppActions, FlightData } from "./app.actions";
import { AngularFireDatabase } from 'angularfire2/database'
import { switchMap, map } from "rxjs/operators";

@Injectable()
export class AppEffects {
    constructor(private db: AngularFireDatabase,
        private actions: Actions) {
    }

    private getFlightDataEffect = createEffect((): any =>
        this.actions.pipe(
            ofType(AppActions.GET_FLIGHT_DATA),
            switchMap(() => this.db.list('data').valueChanges()),
            map((data: any) => new FlightData(data))
        ));

}