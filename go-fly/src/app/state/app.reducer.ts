import { AppActions } from "./app.actions";
import { AppState, initialAppState } from "./app.state";

export function reducer(state: AppState = initialAppState, action: any) {
    switch (action.type) {
        case AppActions.LOADER:
            return {
                ...state,
                loader: action.payload
            };
        case AppActions.ERROR:
            return {
                ...state,
                error: action.payload
            };
        case AppActions.FLIGHT_DATA:
            return {
                ...state,
                flightData: action.payload
            };
        default:
            return state;
    }
}