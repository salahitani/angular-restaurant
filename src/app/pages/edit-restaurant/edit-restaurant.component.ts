import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { __param } from 'tslib';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  mode: string = 'EDIT';
  id: string = '';
  restaurant: Restaurant = {
    description: '',
    name: '',
    cuisine: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestService) { }


  ngOnInit(): void {
    this.route.params
      .subscribe(
        (data: Params) => {
          this.id = data['restaurantID'];
          this.fetchRestaurant(this.id);
        }
      )
  }

  fetchRestaurant(id) {
    this.restaurantService.getARestaurant(id)
      .subscribe((response: any) => {
        this.restaurant = response.data;
      });
  }

  onEdit(data: Restaurant) {
    try {
      this.editRestaurant(data);
    } catch (exception) {
      console.log(exception);
    }
  }

  editRestaurant = (data: Restaurant) => {
    const formValue = { ...data };
    const createRestaurantObservable = this.restaurantService.updateARestaurant(this.id, formValue);
    createRestaurantObservable.subscribe(data => this.router.navigateByUrl('dashboard/restaurants'));
  }

}
