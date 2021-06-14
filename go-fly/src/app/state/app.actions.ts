import { Action } from "@ngrx/store";
import { FlightDataModel, SearchFlightModel } from "../models/flight/flights.model";

export const AppActions = {
    LOADER: 'LOADER',
    ERROR: 'ERROR',
    FLIGHT_DATA: 'FLIGHT_DATA',
    SEARCH_RESULT: 'SEARCH_RESULT'
};


export class Loader implements Action {
    readonly type = AppActions.LOADER;
    constructor(public readonly payload: boolean) { }
}

export class Error implements Action {
    readonly type = AppActions.ERROR;
    constructor(public readonly payload: boolean) { }
}

export class FlightData implements Action {
    readonly type = AppActions.FLIGHT_DATA;
    constructor(public readonly payload: FlightDataModel) { }
}

export class SearchResultData implements Action {
    readonly type = AppActions.SEARCH_RESULT;
    constructor(public readonly payload: SearchFlightModel) { }
}