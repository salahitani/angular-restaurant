import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseURL: string = `https://foodbukka.herokuapp.com/api/v1/`;
  
  constructor(private httpClient: HttpClient) { }

  getAllRestaurants() {
    // Reference: OLD Concat way: this.baseURL + 'restaurant';
    const observable = this.httpClient.get(`${this.baseURL}restaurant`);
    return observable;
  };

  getARestaurant(id: string) {

  };

  postARestaurant(restaurant:{
    name: String,
    address: String,
    restaurantType: String // ENUMS for later
  }) {

  };  

  updateARestaurant(id: String, updatedFields: any) {

  };

  deleteARestaurant(id: String) {

  };

}