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
        case AppActions.SEARCH_RESULT:
            return {
                ...state,
                searchResults: action.payload
            };
        case AppActions.SORT_BY:
            return {
                ...state,
                sortById: action.payload
            };
        default:
            return state;
    }
}