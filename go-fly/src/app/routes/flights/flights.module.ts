import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { AirportValidatorDirective } from './flights.directive';
import { FormsModule } from '@angular/forms';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
    imports: [
        CommonModule,
        FlightRoutingModule,
        FormsModule
    ],
    declarations: [
        FlightsComponent,
        SearchFlightsComponent,
        SearchResultComponent,
        AirportValidatorDirective
    ]
})
export class FlightModule { }