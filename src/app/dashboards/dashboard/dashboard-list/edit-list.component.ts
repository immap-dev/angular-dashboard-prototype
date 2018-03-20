import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector:'edit-list',
  templateUrl: './edit-list.component.html'
})

export class EditListComponent implements OnInit{

	controlName;
	form: FormGroup;


	constructor( @Inject(MAT_DIALOG_DATA) public data: any, 
	 			  private formBuilder: FormBuilder, 
	 			  private editDialog: MatDialogRef<EditListComponent>){}

	ngOnInit(){
		this.controlName=Object.keys(this.data);
		this.form = this.createGroup();
		this.form.setValue(this.data);
		console.log(this.form);
		console.log("LIST",this.data)
		console.log(Object.keys(this.data));

	}

	onNoClick(): void {
    this.editDialog.close();
  }

  	createGroup() {
	        const group = this.formBuilder.group({});       
	        this.controlName.forEach( control => group.addControl(control, this.formBuilder.control(control)));        
	        return group;
	}

	submit(form){
		this.form.controls['updated'].patchValue(new Date());
		this.editDialog.close(form.value);
		console.log('dialogvalue', form.value);
	}


}