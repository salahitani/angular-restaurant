import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

creatRestaurantForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.creatRestaurantForm = new FormGroup({
      name: new FormControl(null, [Validators.required ]),
      descrption: new FormControl(null, [Validators.required, Validators.email ]),
      logo: new FormControl(null,[Validators.required ])
    });

}
}
