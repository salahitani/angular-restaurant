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
    return this.httpClient.post('http://localhost:8080/api/v1/auth/login', body);
  }

  // register(data) {
  //   return this.httpClient.post('http://localhost:8080/register', data) 
  // }
  
  // EQUAL to the above
  // register = (data) => {
  //   return this.httpClient.post('http://localhost:8080/register', data)
  // };
  
  // EQUAL to the above. everything after the arrow will be returned directly
  register = (data) => this.httpClient.post('http://localhost:8080/api/v1/auth/register', data);
}
  