import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    FlightsComponent,
    HotelsComponent,
    CarsComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
