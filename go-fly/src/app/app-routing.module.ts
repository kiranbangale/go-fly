import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './routes/activities/activities.component';
import { CarsComponent } from './routes/cars/cars.component';
import { FlightsComponent } from './routes/flights/flights.component';
import { HotelsComponent } from './routes/hotels/hotels.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

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
  },
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
