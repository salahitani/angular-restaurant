import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.router.navigateByUrl('dashboard/restaurants/createrestaurant');
  }
}
