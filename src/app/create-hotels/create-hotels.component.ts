import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-hotels',
  templateUrl: './create-hotels.component.html',
  styleUrls: ['./create-hotels.component.css']
})
export class CreateHotelsComponent implements OnInit {
  createhotelform: FormGroup;



  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createhotelform = new FormGroup({
      hotelname: new FormControl(null, [Validators.required]),
      hoteldescription: new FormControl(null, [Validators.required]),
      hotellogo: new FormControl(null, [Validators.required])

    });
  }

  get hotelname() {
    return this.createhotelform.get('hotelname');
  }

  get hoteldescription() {
    return this.createhotelform.get('hoteldescription');
  }

  get hotellogo() {
    return this.createhotelform.get('hotellogo');
  }

}
