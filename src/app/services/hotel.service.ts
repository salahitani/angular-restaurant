import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseURL: string = `http://localhost:8080/api/v1/`;
  token: string = '';

  constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
    this.token = this.utilsService.getToken();
  }


  getAllHotels() {
    // Reference: OLD Concat way: this.baseURL + 'restaurant';
    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };
    const observable = this.httpClient.get(`${this.baseURL}hotel`, { headers });
    return observable;
  };

  uploadHotelLogo(formData) {
    const observable = this.httpClient.post(`${this.baseURL}hotel/upload-logo`, formData);
    return observable;
  };

  getAHotel(id: string) {
    const observable = this.httpClient.get(`${this.baseURL}hotel/${id}`);
    return observable;

  };

  postAHotel(hotelData: Hotel) {
    const body: Hotel = {
      ...hotelData
    };

    const headers = {
      'Authorization': `Bearer ${this.token}`,
    };

    return this.httpClient.post(`${this.baseURL}hotel`, body, { headers });
  }

  uploadLogo = (logo: File) => {
    const formData = new FormData();
    formData.append('logo', logo);
    return this.httpClient.post(`${this.baseURL}hotel/upload-logo`, formData);
  };

  updateAHotel(id: String, updatedFields: any) {

  };

  deleteAHotel(id: String) {

  };





}
