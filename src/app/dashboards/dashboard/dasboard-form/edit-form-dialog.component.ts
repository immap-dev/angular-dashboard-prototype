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

	indexRef;
  	optional;
  	thelast;
  	containOpt=[];
  	daftar =[];
  	containOpt2=[];
	  
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
	    console.log('index',this.indexOfSelect);

	   this.indexRef = this.findIndexRef()[0];
	   this.thelast = this.findIndexRef()[this.findIndexRef().length-1];
	 console.log('indexref',this.indexRef);
	 console.log('olddata', this.data.oldData);

	   
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

	//############################################
	findIndexRef(){
      const findIndex =  this.controls2.map((e) => { if( e.type === 'select' && e.data){
         return e.type;  
       } else{return 'no'}; });
      const selections =findIndex.reduce((r, v, i) => r.concat(v === 'select' ? i : []), [])
      return selections
    }

    sortData(n){
      let choicetipe=[];
      const zz =Object.keys(this.data.config[n].data[n]);
      const firstChoice = this.data.config[n].data;
      const zzo = this.data.config[n].name;
      firstChoice.forEach(val=>choicetipe.push(val[zzo]));
      const name = firstChoice;      
      this.data.config[n].data = (Array.from(new Set(choicetipe)));
      console.log('sort',this.data.config[n].data );
      return this.data.config[n].data.sort();   

    }

    selectChange(i){
      console.log('i',i);     

      let b = this.controls2[i].name;
      let init = this.findIndexRef();// index of type select chaining
      const orderNameselect=[]
      for(let x of init){
        orderNameselect.push(this.controls2[x].name);
      }
      console.log('order',orderNameselect);

      console.log('init',init); 
      let initdaftar = init.indexOf(i);// search index from indexin 
      let nextOpt = init[init.indexOf(i)+1];
     
      // const zz = Object.keys(this.config[i+1].data[i+1]);
      // console.log('zz',zz)   
      let choosen = this.form.get(b).value;
      console.log('select',choosen);
      const z= this.data.config[nextOpt].data
       this.optional= z.filter(p=>p[b]=== choosen);
       this.containOpt[nextOpt]=this.optional;
      console.log('apakah berubah', this.optional);
      console.log('apakah masuk', this.containOpt);

      //biar bisa saling chainng, kurang disable , enable udah bisa
      const xy = this.data.config[nextOpt].data;
      let xyz = xy;

      //cek apakah index ref bukan
      if(i===this.indexRef  ){
        this.daftar =[];
        this.containOpt2=[];       
               
        this.daftar[init.indexOf(i)] = choosen;

      } else{
        this.daftar[init.indexOf(i)] = choosen;
     console.log('daftar',this.daftar);
      }

     
      
      for(let j in this.daftar){      
       
        xyz = xyz.filter(p=>p[orderNameselect[j]]=== this.daftar[j])
        console.log('loop',xyz);
      }
      console.log('xy',xyz);
      this.containOpt2[nextOpt] = xyz;
      console.log('opt2',this.containOpt2);
      // this.toggle(this.data.config[nextOpt].name);
     

    }
}