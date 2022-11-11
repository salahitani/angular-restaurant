import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: any = [];
  totalHotels: Number = 0;
  searchValue: string = '';
  baseURL: string = 'http://localhost:8080/'; // --> This is temp, it's better to be fetched from a config file
  logoPlaceHolder: string = 'assets/Images/placeholder-restaurant.png';

  constructor(private router: Router, private route: ActivatedRoute, private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.fetchAllRestaurant();
  }

  fetchAllRestaurant() {
    this.hotelService.getAllHotels()
      .subscribe((response: any) => {
        this.hotels = response.data.map(hotel => ({
          ...hotel,
          logo: hotel.logo ? `${this.baseURL}${hotel.logo}` : this.logoPlaceHolder
        }));
        this.totalHotels = response.data.length;
      });
  };

  onCreate() {
    this.router.navigate(['../create/hotel'], { relativeTo: this.route });
  }

  onOpenRestaurant(id: string) {
    this.router.navigate([`../hotel/${id}`], { relativeTo: this.route });
  }
}
