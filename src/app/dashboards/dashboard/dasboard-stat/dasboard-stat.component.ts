import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-dasboard-stat',
  templateUrl: './dasboard-stat.component.html',
  styleUrls: ['./dasboard-stat.component.css']
})
export class DasboardStatComponent implements OnInit {
  @Input() stats;
  @Input() dashboard;

  formActive = false;  
  form: FormGroup;

  @Output() caseChanged: EventEmitter <any> = new EventEmitter();;
  @ViewChild('statsInput') statsInputField;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // openForm() {
  //   this.form = this.formBuilder.group({
  //     stats: [this.stats]
  //   });
  //   this.formActive = true;
  // }

  // openForm() {
  //   this.form = this.formBuilder.group({
  //     stats: [this.stats.case]
  //   });
  //   this.formActive = true;
  // }

  openForm() {
    this.form = this.formBuilder.group({
      stats: [this.dashboard.case]
    });
    this.formActive = true;
  }

  closeForm() {
    this.formActive = false;
  }

  onFormstatSubmit() {
    this.dashboard.case = this.form.getRawValue().stats;
    //get a update time(date)
    this.dashboard.date = new Date();
    // console.log(this.dashboard.case);
    this.caseChanged.emit(this.dashboard.case)
    this.formActive = false;


    // console.log(this.stats);
  }

}
