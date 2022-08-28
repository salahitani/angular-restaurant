import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc = 'src/assets/Images/Logo1.png'; 
  
  ngOnInit(): void {
  }

}
