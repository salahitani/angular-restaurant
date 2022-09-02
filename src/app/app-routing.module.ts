import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateGuesthouseComponent } from './create-guesthouse/create-guesthouse.component';
import { CreateHotelsComponent } from './create-hotels/create-hotels.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { DashboardAccessGuard } from './dashboard-access.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuesthousesComponent } from './guesthouses/guesthouses.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { LoginGuardGuard } from './login-guard.guard';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInFormComponent, canActivate: [LoginGuardGuard] },
  {
    title: 'Dashboard', path: 'dashboard', canActivate: [DashboardAccessGuard], component: DashboardComponent, children: [{
      path: 'restaurants', component: RestaurantsComponent,
    }, {
      path: 'hotels', component: HotelsComponent
    }, {
      path: 'guesthouses', component: GuesthousesComponent
    }, {
      path: 'create/:category', component: CreatePageComponent
    }]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
