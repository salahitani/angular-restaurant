import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createform: FormGroup;

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createform = new FormGroup({
      businessname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])

    });
  }



  onSubmit() {
    if (this.createform.valid) {
      const authObservable = this.restService.postARestaurant(this.createform.get('businessname').value, this.createform.get('address').value, this.createform.get('type').value);
      authObservable.subscribe((data: any) => {
        this.router.navigateByUrl('dashboard/restaurants');
      });
    }

  }

  get businessname() {
    return this.createform.get('businessname');
  }

  get address() {
    return this.createform.get('address');
  }

  get type() {
    return this.createform.get('type');
  }



}
