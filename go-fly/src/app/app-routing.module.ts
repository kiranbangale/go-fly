import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './routes/activities/activities.component';
import { CarsComponent } from './routes/cars/cars.component';
import { FlightsComponent } from './routes/flights/flights.component';
import { HotelsComponent } from './routes/hotels/hotels.component';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
