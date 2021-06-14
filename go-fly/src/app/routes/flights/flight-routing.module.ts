import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchResultComponent } from './search-result/search-result.component';

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

