import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

}
