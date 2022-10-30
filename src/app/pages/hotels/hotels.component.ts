import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
  }

  onCreate(){
    this.router.navigate(['../create/hotel'], { relativeTo: this.route });
  }

}
