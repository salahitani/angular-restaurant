import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: string = '';
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() createdAt: string = '';
  @Output() buttonEmitter = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {

  }

  ngOnChange() {
  }

  ngOnDestroy() {

  }

  onActionButtonClick = () => {
    this.buttonEmitter.emit(this.id);
  };

}
