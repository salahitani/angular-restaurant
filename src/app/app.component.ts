import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
 
  get checkToken () {
    const token = localStorage.getItem('token');
    if(token) {
      return true;
    }
    return false;
  }

}
