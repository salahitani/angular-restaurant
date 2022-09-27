import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HotelsComponent } from './hotels/hotels.component';
import { GuesthousesComponent } from './guesthouses/guesthouses.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ShowRestaurantComponent } from './show-restaurant/show-restaurant.component';
import { SearchPipe } from './pipes/search.pipe';
import { CardComponent } from './components/card/card.component';
import { ZoomInDirective } from './directives/zoom-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClassBindingComponent,
    LogInFormComponent,
    DashboardComponent,
    RestaurantsComponent,
    HotelsComponent,
    GuesthousesComponent,
    CreateFormComponent,
    NotFoundComponent,
    CreatePageComponent,
    RegisterFormComponent,
    ShowRestaurantComponent,
    SearchPipe,
    CardComponent,
    ZoomInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // LOGIN
    RouterModule,
    FormsModule, // Create
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
