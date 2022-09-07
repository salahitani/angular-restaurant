import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private authSerice: AuthService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authObservable = this.authSerice.login(this.loginForm.get('email').value, this.loginForm.get('pass').value);
      authObservable.subscribe((data: any) => {
        this.saveToken(data.token);
        this.router.navigateByUrl('dashboard');
      });
    }
  }

  // For Later: It's better to be inside a util
  saveToken(token) {
    localStorage.setItem('token', token);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

}
