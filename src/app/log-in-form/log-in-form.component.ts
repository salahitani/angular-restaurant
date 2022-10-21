import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: Boolean = false;
  loginErrorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      const authObservable = this.authService.login(email, password);
      authObservable.subscribe((data: any) => {
        this.isLoading = false;
        this.saveToken(data.token);
        this.router.navigateByUrl('dashboard/restaurants');
      }, (exception) => {
        this.isLoading = false;
        this.loginErrorMessage = exception.error.error;
      });
      // authObservable.subscribe({
      //   next(data: any) {
      //   }, error(exception) {
      //     this.isLoading = false;
      //   }, complete() {
      //     this.isLoading = false;
      //   }
      // });
    }
  }

  // For Later: It's better to be inside a util
  saveToken(token) {
    localStorage.setItem('token', token);
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
