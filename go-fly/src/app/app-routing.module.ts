import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './guards/app.guard';
import { ActivitiesComponent } from './routes/activities/activities.component';
import { CarsComponent } from './routes/cars/cars.component';
import { HotelsComponent } from './routes/hotels/hotels.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () => import('./routes/flights/flights.module').then(m => m.FlightModule),
    canActivate: [AppGuard],
    data: { preload: true }
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
