import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  namez: string = '';
  descriptionz: string = '';
  logoz: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
