import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: Boolean = false;
  loginErrorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private utilsService: UtilsService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const authObservable = this.authService.login(email, password);
    authObservable.subscribe((data: any) => {
      this.isLoading = false;
      this.saveToken(data.token);
      this.router.navigateByUrl('dashboard/restaurants');
    }, (exception) => {
      this.handleException(exception);
      this.isLoading = false;
    });
  }

  handleException(exception) {
    const { error: { errors }, status } = exception;
    switch (status) {
      case 400:
        const errorsKeys = Object.keys(errors);
        errorsKeys.forEach(key => {
          this.loginForm.controls[key].setErrors({ "invalid": errors[key] });
        });
        break;
      case 404:
        this.loginErrorMessage = errors.generic;
        break;
      default:
        this.loginErrorMessage = 'An error occurred'
    }
  }

  saveToken(token) {
    this.utilsService.saveToken(token);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onRegister() {
    this.router.navigateByUrl('register');
  }

}
