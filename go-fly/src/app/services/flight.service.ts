import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FlightDataModel, SearchFlightModel } from "../models/flight/flights.model";
import { FlightData, SearchResultData, SortBy } from "../state/app.actions";
import { AppState } from "../state/app.state";

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    constructor(private store: Store<AppState>) { }

    public loadInitialData(): Observable<FlightDataModel> {
        return this.store.select(state => state.flightData);
    }

    public storeFlightData(flightData: FlightDataModel): void {
        this.store.dispatch(new FlightData(flightData));
    }

    public searchResults(searchFormInputs: SearchFlightModel, data: any): void {
        this.store.dispatch(new SearchResultData(data.app.flightData.data.searchResults));
    }

    public sortResults(sortBy: number): void {
        this.store.dispatch(new SortBy(sortBy));
    }
}