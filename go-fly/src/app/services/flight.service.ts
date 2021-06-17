import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FlightDataModel, SearchFlightModel } from "../models/flight/flights.model";
import { CurrentTab, FlightData, SearchResultData, SortBy } from "../state/app.actions";
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
        //         let tabHeaderData =
        //             `${searchFormInputs.departure} -> ${searchFormInputs.destination}
        // ${searchFormInputs.departureDate}-${searchFormInputs.returnDate} | ${searchFormInputs.travellers.count}${searchFormInputs.travellers.type}`
        // this.store.dispatch(new CurrentTab(tabHeaderData));
        this.store.dispatch(new SearchResultData(data.app.flightData.data.searchResults));
    }

    public sortResults(sortBy: number): void {
        this.store.dispatch(new SortBy(sortBy));
    }
}