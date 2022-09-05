import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    const body = {
      "email": email,
      "password": password
    };
    return this.httpClient.post('http://localhost:7777/api/v1/auth/login', body);
  }

}
