import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './guards/app.guard';
import { ActivitiesComponent } from './routes/activities/activities.component';
import { CarsComponent } from './routes/cars/cars.component';
import { FlightsComponent } from './routes/flights/flights.component';
import { HotelsComponent } from './routes/hotels/hotels.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent,
    canActivate: [AppGuard]
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
  providers: [AppGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
