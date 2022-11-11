import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  mode = 'light';
  cafe = 'you';
  isVisible = true;
  dynamicColor = 'blue';
  constructor() { }

  ngOnInit(): void {
  }


  
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
