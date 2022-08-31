import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGuesthouseComponent } from './create-guesthouse/create-guesthouse.component';
import { CreateHotelsComponent } from './create-hotels/create-hotels.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuesthousesComponent } from './guesthouses/guesthouses.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LogInFormComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'dashboard/restaurants',component:RestaurantsComponent},
  {path: 'dashboard/hotels', component:HotelsComponent},
  {path: 'dashboard/guesthouses', component:GuesthousesComponent},
  {path: 'dashboard/restaurants/createrestaurant', component:CreateRestaurantComponent},
  {path: 'dashboard/hotels/createhotel', component:CreateHotelsComponent},
  {path: 'dashboard/guesthouses/createguesthouse', component:CreateGuesthouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
