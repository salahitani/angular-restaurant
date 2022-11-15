import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc = 'src/assets/Images/Logo1.png';

  constructor(private router: Router, private utilsService: UtilsService ) {}

  ngOnInit(): void {
  }

  onLogout() {
    this.utilsService.removeToken();
    this.router.navigateByUrl('/login');
  }

}
