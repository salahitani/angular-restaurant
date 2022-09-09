import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router: Router, private authSerice: AuthService) { }



  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });}

    onSubmit() {
      if (this.registerForm.valid) {
        const authObservable = this.authSerice.register(this.registerForm.get('username').value, this.registerForm.get('pass').value, this.registerForm.get('phonenumber').value, this.registerForm.get('email').value);
        authObservable.subscribe((data: any) => {
          this.saveToken(data.token);
          this.router.navigateByUrl('dashboard/restaurants');
        });
      }
    }

    saveToken(token) {
      localStorage.setItem('token', token);
    }


    get username() {
      return this.registerForm.get('username');
    }
  
    get pass() {
      return this.registerForm.get('pass');
    }

    get phonenumber() {
      return this.registerForm.get('phonenumber');
    }
  
    get email() {
      return this.registerForm.get('email');
    }
  }