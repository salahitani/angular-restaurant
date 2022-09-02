import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guesthouses',
  templateUrl: './guesthouses.component.html',
  styleUrls: ['./guesthouses.component.css']
})
export class GuesthousesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
  }

  onCreate(){
    this.router.navigate(['../create/guesthouse'], { relativeTo: this.route });
  }

}
