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
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });}

    onSubmit() {
      if (this.registerForm.valid) {
        const authObservable = this.authSerice.register(this.registerForm.get('firstName').value, this.registerForm.get('lastName').value, this.registerForm.get('email').value, this.registerForm.get('password').value,this.registerForm.get('confirmPassword').value);
        authObservable.subscribe((data: any) => {
          this.saveToken(data.token);
          this.router.navigateByUrl('dashboard/restaurants');
        });
      }
    }

    saveToken(token) {
      localStorage.setItem('token', token);
    }


    get firstName() {
      return this.registerForm.get('firstName');
    }

    get lastName() {
      return this.registerForm.get('lastName');
    }

    get email() {
      return this.registerForm.get('email');
    }
  
    get password() {
      return this.registerForm.get('password');
    }

    get confirmPassword() {
      return this.registerForm.get('confirmPassword');
    }
  
  
  }