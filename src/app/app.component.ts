import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
  mode = 'light';
  cafe = 'you';
  isVisible = false;
  dynamicColor = 'blue'
  divClasses = {
    'light-mode': this.mode === 'light',
    'dark-mode': this.mode !== 'light'
  };
  styles = {
    'background-color': this.mode === 'light' ? 'yellow' : 'black',
    'color': 'white',
    'margin-top': '10px'
  };

  logSomething() {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
    this.styles['background-color'] = this.mode === 'light' ? 'yellow' : 'black';
  };
}
