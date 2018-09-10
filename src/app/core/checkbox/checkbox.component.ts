import { Component, OnInit,Input,EventEmitter,SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
 @Input() controls;
  @Input() form: FormGroup;
  @Input() check;
  @Input() submitSuccess: EventEmitter<boolean>;
  hideme=[];
	checkbox= [
    {name:'red',checked:true},
    {name:'green',checked:false},
    {name:'blue',checked:false}
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.form, 'picker')
    console.log('CP', this.controls);
    console.log(this.check);
  }

  checkboxChange(event) {
    console.log(`TES-Checkbox ${event.source.value}`);
    let a = event.source.value;
    console.log(this.hideme);
  }

  onCheckChange(event, controlName) {
    console.log(event, controlName);
    const formArray: FormArray = this.form.get(controlName) as FormArray;
    if (event.checked) {
      console.log(event.source.value);
      formArray.push(new FormControl(event.source.value));
    }
    else {
      console.log('belum dicentang');
      
    }

   

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes.submitSuccess){
      this.resetCheckbox();
    }
  }

  resetCheckbox() {
    for (let i = 0; i <= this.hideme.length; i++) {
      if (this.hideme[i] == true) {
        this.hideme[i] = false;
        console.log(this.hideme[i])
      }
    }
  }

}
