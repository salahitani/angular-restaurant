import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardAccessGuard } from './guards/dashboard-access.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuesthousesComponent } from './pages/guesthouses/guesthouses.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { LogInFormComponent } from './pages/log-in-form/log-in-form.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { EditRestaurantComponent } from './pages/edit-restaurant/edit-restaurant.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/restaurants', pathMatch: 'full' },
  { path: 'login', component: LogInFormComponent, canActivate: [LoginGuardGuard] },
  { path: 'register', component: RegisterFormComponent},
  {
    title: 'Dashboard', path: 'dashboard', canActivate: [DashboardAccessGuard] ,component: DashboardComponent, children: [{
      path: 'restaurants', component: RestaurantsComponent,
    }, {
      path: 'hotels', component: HotelsComponent
    }, {
      path: 'guesthouses', component: GuesthousesComponent
    }, {
      path: 'create/:category', component: CreatePageComponent
    },
    {
      path: 'restaurant/:restaurantID', component: EditRestaurantComponent
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
export class AppRoutingModule { 

}
