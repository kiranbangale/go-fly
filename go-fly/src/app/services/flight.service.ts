import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FlightDataModel } from "../models/flight/flights.model";
import * as fromAppSelectors from "../state/app.selector";
import { AppState } from "../state/app.state";

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    constructor(private store: Store<AppState>) { }

    public loadInitialData(): Observable<FlightDataModel> {
        return this.store.select(fromAppSelectors.getSelectFlightData);
    }
}