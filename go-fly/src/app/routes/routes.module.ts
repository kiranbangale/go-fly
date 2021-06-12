import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightsComponent,
    HotelsComponent,
    CarsComponent,
    ActivitiesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RoutesModule { }
