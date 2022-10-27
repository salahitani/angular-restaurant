import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseURL: string = `http://localhost:8080/api/v1/`;

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants() {
    // Reference: OLD Concat way: this.baseURL + 'restaurant';
    const observable = this.httpClient.get(`${this.baseURL}restaurant`);
    return observable;
  };

  uploadRestaurantLogo(formData) {
    const observable = this.httpClient.post(`${this.baseURL}restaurant/upload-logo`, formData);
    return observable;
  };

  getARestaurant(id: string) {
    const observable = this.httpClient.get(`${this.baseURL}restaurant/'${id}`);
    return observable;

  };

  postARestaurant(restaurantData: Restaurant) {
    const body: Restaurant = {
      ...restaurantData
    };

    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };

    return this.httpClient.post(`${this.baseURL}restaurant`, body, { headers });
  }

  uploadLogo = (logo: File) => {
    const formData = new FormData();
    formData.append('logo', logo);  
    return this.httpClient.post(`${this.baseURL}restaurant/upload-logo`, formData);
  };

  updateARestaurant(id: String, updatedFields: any) {

  };

  deleteARestaurant(id: String) {

  };

}
