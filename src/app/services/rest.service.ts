import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseURL: string = `http://localhost:8080/api/v1/`;
  token: string = '';
  constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
    this.token = this.utilsService.getToken();
  }

  getAllRestaurants() {
    // Reference: OLD Concat way: this.baseURL + 'restaurant';
    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };
    const observable = this.httpClient.get(`${this.baseURL}restaurant`, { headers });
    return observable;
  };

  uploadRestaurantLogo(formData) {
    const observable = this.httpClient.post(`${this.baseURL}restaurant/upload-logo`, formData);
    return observable;
  };

  getARestaurant(id: string) {
    const observable = this.httpClient.get(`${this.baseURL}restaurant/${id}`);
    return observable;

  };

  postARestaurant(restaurantData: Restaurant) {
    const body: Restaurant = {
      ...restaurantData
    };

    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };

    return this.httpClient.post(`${this.baseURL}restaurant`, body, { headers });
  }

  uploadLogo = (logo: File) => {
    const formData = new FormData();
    formData.append('logo', logo);
    return this.httpClient.post(`${this.baseURL}restaurant/upload-logo`, formData);
  };

  updateARestaurant(id: String, restaurantData: any) {
    const body: Restaurant = {
      ...restaurantData
    };

    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };

    return this.httpClient.put(`${this.baseURL}restaurant/${id}`, body, { headers });
  };

  deleteARestaurant(id: String) {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };
    return this.httpClient.delete(`${this.baseURL}restaurant/${id}`, { headers });
  };

}
