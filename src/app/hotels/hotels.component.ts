import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl('dashboard/hotels/createhotel');
  }

}
