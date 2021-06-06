import { FlightDataModel } from "../models/flight/flights.model";

export interface AppState {
    loader: boolean;
    error: boolean;
    flightData: FlightDataModel;
}

export const initialAppState: any = {
    loader: false,
    error: false,
    flightData: null
};