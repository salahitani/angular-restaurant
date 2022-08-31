import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guesthouses',
  templateUrl: './guesthouses.component.html',
  styleUrls: ['./guesthouses.component.css']
})
export class GuesthousesComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl('dashboard/guesthouses/createguesthouse');
  }

}
