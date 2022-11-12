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

  async onCreate(data: Restaurant) {
    try {
      let restaurantData = { ...data };
      if ('logo' in restaurantData) {
        const logoName = await this.uploadImage(restaurantData.logo);
        restaurantData = { ...restaurantData, logo: logoName };
      }
      this.createRestaurant(restaurantData);
    } catch (exception) {
      console.log(exception);
    }
  }

  createRestaurant = async (data: Restaurant) => {
    const formValue = { ...data };
    const createRestaurantObservable = this.restService.postARestaurant(formValue);
    createRestaurantObservable.subscribe(data => this.router.navigateByUrl('dashboard/restaurants'));
  }

  uploadImage = (logo: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const logoFormData = new FormData();
      logoFormData.append('logo', logo);
      const uploadObservable = this.restService.uploadRestaurantLogo(logoFormData);
      uploadObservable.subscribe((data: any) => {
        resolve(data.filename);
      }, (exception) => {
        reject(exception);
      });
    });
  }


}
