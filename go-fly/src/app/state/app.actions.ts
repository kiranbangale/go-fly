import { Action } from "@ngrx/store";
import { FlightDataModel } from "../models/flight/flights.model";

export const AppActions = {
    LOADER: 'LOADER',
    ERROR: 'ERROR',
    FLIGHT_DATA: 'FLIGHT_DATA'
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