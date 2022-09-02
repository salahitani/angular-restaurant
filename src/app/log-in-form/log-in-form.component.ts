import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      name: new FormControl('Khaled', [Validators.required]),
      email: new FormControl('khaled@neo.ae', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // For later: when we implement the APIs request a token will be retreived and saved 
      this.saveToken();
      this.router.navigateByUrl('dashboard');
    }
  }

  // For Later: It's better to be inside a util
  // Note: random token: is retreived from the API request as a response.
  saveToken() {
    localStorage.setItem('token', 'random-token');
  }

  get name() {
    return this.loginForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }

}
