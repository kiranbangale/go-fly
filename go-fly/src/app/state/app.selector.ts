import { createSelector } from "@ngrx/store";
import { FlightDataModel, SearchFlightModel } from "../models/flight/flights.model";
import { AppState } from "./app.state";

export const selectLoader = (state: AppState) => state.loader;
export const selectError = (state: AppState) => state.error;
export const selectFlightData = (state: AppState) => state.flightData;
export const selectSearchResults = (state: AppState) => state.searchResults;

export const getSelectLoader = createSelector(
    selectLoader,
    (value: boolean) => value
);

export const getSelectError = createSelector(
    selectError,
    (value: boolean) => value
);

export const getSelectFlightData = createSelector(
    selectFlightData,
    (flightData: FlightDataModel) => { return flightData; }
);

export const getSelectSearchedData = createSelector(
    selectSearchResults,
    (data: SearchFlightModel) => data
);
