import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CreateHotelsComponent } from './create-hotels/create-hotels.component';
import { GuesthousesComponent } from './guesthouses/guesthouses.component';
import { CreateGuesthouseComponent } from './create-guesthouse/create-guesthouse.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClassBindingComponent,
    LogInFormComponent,
    DashboardComponent,
    RestaurantsComponent,
    CreateRestaurantComponent,
    HotelsComponent,
    CreateHotelsComponent,
    GuesthousesComponent,
    CreateGuesthouseComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
