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


  register(firstName,lastName, password, confirmPassword, email) {
    const body = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "confirmPassword": confirmPassword      
    };
    console.log(body);
    console.log("Registration Done");
    return this.httpClient.post('http://localhost:8080/register', body);
    
  }

}
