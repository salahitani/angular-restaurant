import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  createrestaurantform:FormGroup;
  
  constructor(private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createrestaurantform = new FormGroup({
      restname: new FormControl(null, [Validators.required]),
      restdescription: new FormControl(null, [Validators.required]),
      restlogo: new FormControl(null, [Validators.required])
      
    });
  }

  get restname() {
    return this.createrestaurantform.get('restname');
  }

  get restdescription() {
    return this.createrestaurantform.get('restdescription');
  }
  get restlogo() {
    return this.createrestaurantform.get('restlogo');
  }


}
