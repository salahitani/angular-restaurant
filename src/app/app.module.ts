import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClassBindingComponent,
    LogInFormComponent,
    RestaurantsComponent,
    CreateRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
