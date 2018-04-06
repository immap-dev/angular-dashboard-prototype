import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

	checkbox= [
    {name:'red',checked:true},
    {name:'green',checked:false},
    {name:'blue',checked:false}
  ]

  constructor() { }

  ngOnInit() {

  }

}
