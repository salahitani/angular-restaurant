import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  loginForm: FormGroup;
  
constructor(private router: Router){}

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required ]),
      email: new FormControl(null, [Validators.required, Validators.email ])
    });
  }
  
  onSubmit(){
    console.log(this.loginForm);
    this.router.navigateByUrl('restaurants');
  }

}
