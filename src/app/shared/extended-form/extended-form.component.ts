import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder,NgForm,FormGroupDirective,ValidatorFn,Validators} from '@angular/forms';
import { FieldConfig} from '../../dashboards/dashboard/dasboard-form/models/field-config.interface';
@Component({
  selector: 'app-extended-form',
  templateUrl: './extended-form.component.html',
  styleUrls: ['./extended-form.component.css']
})
export class ExtendedFormComponent implements OnInit {
 @Input() childForm;
 @Output() extendSubmit: EventEmitter<any> = new EventEmitter<any>();


 extendForm: FormGroup;
 // get controls() { return this.childForm[0].configChildform};
 get controls() { return this.childForm};
  get value() { return this.extendForm.value; }
  get valid() { return this.extendForm.valid; }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	console.log("Extended",this.childForm, this.controls);
  	this.extendForm = this.createGroup()
  	console.log(this.extendForm);
  }


  createGroup(){
  	const group = this.fb.group({});
  	this.controls.forEach(control => group.addControl(control.name,this.createControl(control)));
  	return group;
  }

  createControl(config:FieldConfig){
  	const validat: ValidatorFn[]=[];
  	const {disabled, validation, value} = config;

  	if(validation){
  		validation.forEach(valid =>{
  			if(valid === 'required'){
  				validat.push(Validators.required);
  			}

  		});
  		return this.fb.control({disabled,value},validat);
  	} else { 
          console.log('validation tak ada');
          return this.fb.control({disabled, value});
    }
  }

  extendedSubmitForm(formData: any, formDirective: FormGroupDirective){
  	

  	if(this.valid){
  		console.log('Extend value',this.extendForm.value, this.value);
      this.extendSubmit.emit(this.value);
      formDirective.resetForm();
      this.extendForm.reset();
      this.resetForm();
  	}
  	else{
  		console.log('Extend not valid',this.extendForm.value);
  	}
  }

   resetForm(){    
      let z= this.controls.length;      
      for (let xx=0; xx <z; xx++){
        if(this.controls[xx].disabled){
          // console.log('reset',xx,this.controls[xx].errorState);
           let control =this.extendForm.get(this.controls[xx].name)
           control.disable() ;             
        }        
      }  
      

      this.extendForm= this.createGroup(); 
   }   

    

}


