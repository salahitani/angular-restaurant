import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../interfaces/restaurant';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
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



  onSubmit() {
    if (this.createform.valid) {
      const formValue: Restaurant = this.createform.value;
      formValue.logo = this.logo;
      const authObservable = this.restService.postARestaurant(formValue);
      authObservable.subscribe((data: any) => {
        this.router.navigateByUrl('dashboard/restaurants');
      });
    }
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
