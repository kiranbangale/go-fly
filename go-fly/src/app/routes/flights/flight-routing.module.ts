import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterFlightResultsComponent } from './filter-flight-results/filter-flight-results.component';
import { FlightsComponent } from './flights/flights.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SortFlightResultsComponent } from './sort-flight-results/sort-flight-results.component';

const flightRoutes: Routes = [
    {
        path: '',
        component: FlightsComponent,
        children: [
            {
                path: '',
                component: SearchFlightsComponent
            },
            {
                path: 'searchResult',
                component: SearchResultComponent
            },
            {
                path: 'sortFlights',
                component: SortFlightResultsComponent
            },
            {
                path: 'filterFlights',
                component: FilterFlightResultsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(flightRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FlightRoutingModule { }

