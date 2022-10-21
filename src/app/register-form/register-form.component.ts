import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private authSerice: AuthService, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.initForm();
  }

  validatePasswords = (passwordControl: AbstractControl, confirmPasswordControl: AbstractControl): ValidatorFn => {
    return () => {
      if(passwordControl.value !== confirmPasswordControl.value) {
        return { 'password_match': true }
      }
      return null; 
    }
  };
  
  initForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.registerForm.addValidators(
      this.validatePasswords(this.registerForm.get('password'), this.registerForm.get('confirmPassword'))
    )

    // For reference
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required]),
    //   lastName: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required]),
    //   confirmPassword: new FormControl('', [Validators.required])
    // });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registrationData = this.registerForm.value;
      const authObservable = this.authSerice.register(registrationData);
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