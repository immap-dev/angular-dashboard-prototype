import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-dasboard-title',
  templateUrl: './dasboard-title.component.html',
  styleUrls: ['./dasboard-title.component.css']
})
export class DasboardTitleComponent implements OnInit {
  formActive = false;
  form: FormGroup;
 
  @Input() dashboard;
  @Output() titleChanged: EventEmitter <any> = new EventEmitter();

  @ViewChild('nameInput') nameInputField;
  @ViewChild('facilityInput') facilityInputField;
  @ViewChild('cityInput') cityInputField;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  openForm() {
    this.form = this.formBuilder.group({
      name: [this.dashboard.title.name],
      facility: [this.dashboard.title.facility],
      city: [this.dashboard.title.city]
    });
    this.formActive = true;
    this.focusNameField();
  }


  closeForm() {
    this.formActive = false;
  }

  focusNameField() {
    setTimeout(() => {
      this.nameInputField.nativeElement.focus();
    });
  }

  onFormSubmit() {
    
    this.dashboard.title = this.form.getRawValue();
    this.dashboard.uri = encodeURIComponent(this.dashboard.title.name).replace(/%20/g, '-').toLowerCase();
    this.dashboard.date = new Date();
    this.titleChanged.emit(this.dashboard.title);
    this.formActive = false;

  }

}
