import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username, password) {
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post('https://foodbukka.herokuapp.com/api/v1/auth/login', body);
  }


  register(username, password, phonenumber, email) {
    const body = {
      "username": username,
      "password": password,
      "phoneNumber": phonenumber,
      "email": email
    };
    console.log("Registration Done");
    return this.httpClient.post('https://foodbukka.herokuapp.com/api/v1/auth/register', body);
    
  }

}
