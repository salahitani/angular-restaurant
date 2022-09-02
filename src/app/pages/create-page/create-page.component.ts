import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  category: string = '';

  constructor(private route: ActivatedRoute) { 

    // we need to catch the category name using router subscribe
  }

ngOnInit() {
 this.category = this.route.snapshot.paramMap.get('category');
}

}
