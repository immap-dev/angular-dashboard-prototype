import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector:'edit-form-dialog',
  templateUrl: './edit-form-dialog.component.html'
})
export class EditFormDialogComponent implements OnInit{

	form: FormGroup;
	allProductsTypes;
	productsAfterChangeEvent;
	indexOfSelect;
	  
	constructor( @Inject(MAT_DIALOG_DATA) public data: any, 
	 			  private formBuilder: FormBuilder, 
	 			  private editDialog: MatDialogRef<EditFormDialogComponent>){}
	 
	get controls2() { return this.data.config.filter(({type}) => type !== 'button'); };
	
    
	ngOnInit(){ 	
	   this.form = this.createGroup();
	   this.form.setValue(this.data.oldData);
	   // console.log('inject-data2', this.controls2);
	   this.allProductsTypes = this.data.selectOne;
	   // console.log('product',this.allProductsTypes);
	   this.indexOfSelect = this.findSelectIndex();
	   // console.log('index',this.indexOfSelect);

	   
	   this.typeChanged();

	}

	submit(form) {
	    
	    this.editDialog.close(form.value);
	    console.log('dialogvalue', form.value);
	}

	createGroup() {
	        const group = this.formBuilder.group({});       
	        this.controls2.forEach( control => group.addControl(control.name, this.formBuilder.control(control)));        
	        return group;
	}

	findSelectIndex(){
	      
	       const findIndex =  this.controls2.map((e) => { if( e.type === 'select'){
	         return e.type;  
	       } else{return 'bukan'}; });
	     const index = findIndex.indexOf('select');
	     return index
	}

	typeChanged() {   	
	    
	      const b = this.controls2[this.indexOfSelect].name;    	
	      const productType = this.form.get(b).value;
	      this.productsAfterChangeEvent = this.data.selectTwo.filter(p => p.type === productType);   	

	}
}