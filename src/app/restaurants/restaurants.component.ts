import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any = [];
  totalRestaurant: Number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private restaurantService: RestService) {
  }

  ngOnInit(): void {
    this.fetchAllRestaurant();
  }

  fetchAllRestaurant() {
    this.restaurantService.getAllRestaurants()
    .subscribe((response: any) => {
      
      // const restaurantsResult = response.Result.map(restaurant => {
      //   return {
      //     ...restaurant,
      //     businessname: restaurant.businessname.charAt(0).toUpperCase() + restaurant.businessname.slice(1)
      //   }
      // })
      this.restaurants = response.Result;
    });
  };

  onCreate() {
    this.router.navigate(['../create/restaurant'], { relativeTo: this.route });
  }
}
