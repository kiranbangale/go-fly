import { createSelector } from "@ngrx/store";
import { FlightDataModel } from "../models/flight/flights.model";
import { AppState } from "./app.state";

export const selectLoader = (state: AppState) => state.loader;
export const selectError = (state: AppState) => state.error;
export const selectFlightData = (state: AppState) => state.flightData;

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