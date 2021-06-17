import { FlightDataModel, SearchFlightModel } from "../models/flight/flights.model";

export interface AppState {
    loader: boolean;
    error: boolean;
    flightData: FlightDataModel;
    searchResults: SearchFlightModel;
    sortById: number;
    currentTab: string;
}

export const initialAppState: any = {
    loader: false,
    error: false,
    flightData: null,
    searchResults: null,
    sortById: 0,
    currentTab: ''
};