import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-guesthouse',
  templateUrl: './create-guesthouse.component.html',
  styleUrls: ['./create-guesthouse.component.css']
})
export class CreateGuesthouseComponent implements OnInit {
  createguesthouseform: FormGroup;



  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createguesthouseform = new FormGroup({
      guesthousename: new FormControl(null, [Validators.required]),
      guesthousedescription: new FormControl(null, [Validators.required]),
      guesthouselogo: new FormControl(null, [Validators.required])

    });
  }

  get guesthousename() {
    return this.createguesthouseform.get('guesthousename');
  }

  get guesthousedescription() {
    return this.createguesthouseform.get('guesthousedescription');
  }

  get guesthouselogo() {
    return this.createguesthouseform.get('guesthouselogo');
  }

}
