import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any = [];
  totalRestaurant: Number = 0;
  searchValue: string = '';
  baseURL: string = 'http://localhost:8080/'; // --> This is temp, it's better to be fetched from a config file
  logoPlaceHolder: string = 'assets/Images/placeholder-restaurant.png';

  constructor(private router: Router, private route: ActivatedRoute, private restaurantService: RestService) {
  }

  ngOnInit(): void {
    this.fetchAllRestaurant();
  }

  fetchAllRestaurant() {
    this.restaurantService.getAllRestaurants()
    .subscribe((response: any) => {
      this.restaurants = response.data.map(restaurant => ({
        ...restaurant,
        logo: restaurant.logo ? `${this.baseURL}${restaurant.logo}` : this.logoPlaceHolder  
      }));
      this.totalRestaurant = response.data.length;
    });
  };

  onCreate() {
    this.router.navigate(['../create/restaurant'], { relativeTo: this.route });
  }

  onOpenRestaurant(id: string) {
    this.router.navigate([`../restaurant/${id}`], { relativeTo: this.route });
  };

  // REFERENCE
  // onSearch() {
  //   this.restaurants = this.restaurants.filter(restaurant => {
  //     if(restaurant.businessname.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())) {
  //       return restaurant;
  //     }
  //   });
  //   this.totalRestaurant = this.restaurants.length;
  // }

}
