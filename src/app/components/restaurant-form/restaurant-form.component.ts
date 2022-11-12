import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../../interfaces/restaurant';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  createform: FormGroup;
  logo: File;
  @Output() onSubmit = new EventEmitter<Restaurant>();
  @Output() onDelete = new EventEmitter<any>();
  @Input() mode = 'CREATE';
  @Input() restaurantCuisine: string = '';
  @Input() restaurantName: string = '';
  @Input() restaurantDescription: string = '';

  ngOnInit() {
  }

  ngOnChanges() {
    this.initForm();
  }

  initForm() {
    this.createform = new FormGroup({
      name: new FormControl(this.restaurantName, [Validators.required]),
      description: new FormControl(this.restaurantDescription, [Validators.required]),
      cuisine: new FormControl(this.restaurantCuisine, [Validators.required])
    });
  }

  onFormSubmittion() {
    if (this.createform.invalid) {
      return;
    }
    if (this.logo) {
      this.onSubmit.emit({ ...this.createform.value, logo: this.logo });
    } else {
      this.onSubmit.emit({ ...this.createform.value });
    }
  }

  onRestaurantDelete() {
    this.onDelete.emit();
  };

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
