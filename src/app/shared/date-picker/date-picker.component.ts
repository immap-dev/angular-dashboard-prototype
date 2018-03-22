import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
@Input() form: FormGroup;
@Input() control;
  constructor() { }

  ngOnInit() {
  	console.log(this.form, 'picker')
  	console.log('CP',this.control);

  }

}
