import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { __param } from 'tslib';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.css']
})
export class ShowRestaurantComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestService) { }

  id: number;
  restaurant: any;

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['restaurantID'];
          console.log(params) //log the entire params object
          console.log(this.id) //log the value of id
          this.fetchRestaurant(this.id);
        }
      )



  }


  fetchRestaurant(id) {
    this.restaurantService.getARestaurant(id)
      .subscribe((response: any) => {
        this.restaurant = response.Result;
        console.log(this.restaurant);
      });
  }

}
