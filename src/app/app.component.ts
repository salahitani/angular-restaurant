import { Component, OnInit} from '@angular/core';
import { UtilsService } from './services/utils.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';

  constructor(private utilsService: UtilsService) {

  }
 
  get checkToken () {
    const token = this.utilsService.getToken();
    if(token) {
      return true;
    }
    return false;
  }

}
