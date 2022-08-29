import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';

import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component:LogInFormComponent },
  {path: 'restaurants', component:RestaurantsComponent},
  {path: 'createRestaurant', component:CreateRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
