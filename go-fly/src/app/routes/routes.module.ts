import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HotelsComponent,
    CarsComponent,
    ActivitiesComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class RoutesModule { }
