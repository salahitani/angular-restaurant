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

  constructor(private router: Router, private authService: AuthService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const authObservable = this.authService.login(this.loginForm.get('username').value, this.loginForm.get('pass').value);
      authObservable.subscribe((data: any) => {
        this.isLoading = false;
        this.saveToken(data.token);
        this.router.navigateByUrl('dashboard/restaurants');
      }, () => {
        this.isLoading = false;
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

  get username() {
    return this.loginForm.get('username');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

  onRegister() {
    this.router.navigateByUrl('register');
  }

}
