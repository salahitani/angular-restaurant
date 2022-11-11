import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  category: string = '';
  mode: string = 'CREATE';

  constructor(private route: ActivatedRoute, private restService: RestService, private router: Router) {

    // we need to catch the category name using router subscribe
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
  }

  onCreate(data: Restaurant) {
    try {
      // if (this.createform.invalid) {
      //   return;
      // }
      // let logoName = '';
      // if (this.logo) {
      //   logoName = await this.uploadImage();
      // }
      this.createRestaurant(data);
    } catch (exception) {
      console.log(exception);
    }
    // console.log("I will run the post code.");
  }

  createRestaurant = async (data: Restaurant) => {
    // const formValue = { ...this.createform.value, logo: logoName }
    const formValue = { ...data };
    const createRestaurantObservable = this.restService.postARestaurant(formValue);
    createRestaurantObservable.subscribe(data => this.router.navigateByUrl('dashboard/restaurants'));
  }

}
