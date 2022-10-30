import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../../interfaces/restaurant';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-restaurant-form.component.html',
  styleUrls: ['./create-restaurant-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createform: FormGroup;
  logo: File;

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      cuisine: new FormControl('', [Validators.required])
    });
  }



  async onSubmit() {

    try {
      if (this.createform.invalid) {
        return;
      }
      let logoName = '';
      if (this.logo) {
        logoName = await this.uploadImage();
      }
      this.createRestaurant(logoName);
    } catch (exception) {
      console.log(exception);
    }

  }

  uploadImage = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      const logoFormData = new FormData();
      logoFormData.append('logo', this.logo);
      const uploadObservable = this.restService.uploadRestaurantLogo(logoFormData);
      uploadObservable.subscribe((data: any) => {
        resolve(data.filename);
      }, (exception) => {
        reject(exception);
      });
    });
  }

  createRestaurant = (logoName) => {
    const formValue = { ...this.createform.value, logo: logoName }
    const createRestaurantObservable = this.restService.postARestaurant(formValue);
    createRestaurantObservable.subscribe(data => this.router.navigateByUrl('dashboard/restaurants'));
  }

  onLogoChange = (event) => {
    if (event.target.files.length) {
      this.logo = event.target.files[0];
    }
  };

  get name() {
    return this.createform.get('name');
  }

  get description() {
    return this.createform.get('description');
  }

  get cuisine() {
    return this.createform.get('cuisine');
  }



}
