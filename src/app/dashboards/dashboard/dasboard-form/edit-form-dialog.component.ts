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
     console.log('tolddata',this.data.oldData);

	   this.form.setValue(this.data.oldData);
     this.indexRef = this.findIndexRef()[0];
     this.sortData(this.indexRef);
      this.setInitData();
     this.thelast = this.findIndexRef()[this.findIndexRef().length-1];


	

	   
	 console.log('indexref',this.indexRef);
	 console.log('olddata', this.data.oldData);

	   
	   // this.typeChanged();

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



	findIndexRef(){
      const findIndex =  this.controls2.map((e) => { if( e.type === 'select' && e.cascade){
         return e.type;  
       } else{return 'no'}; });
      console.log('ff',findIndex)
      const selections =findIndex.reduce((r, v, i) => r.concat(v === 'select' ? i : []), [])
      return selections
    }

    sortData(n){
      let choicetipe=[];
      
      let firstChoice = this.data.config[n].cascade;
      const nameOfSelectInput = this.data.config[n].name;
      firstChoice.forEach(val=>choicetipe.push(val[nameOfSelectInput]));
      const name = firstChoice;      
       firstChoice = (Array.from(new Set(choicetipe)));

      // console.log('sort',this.data.config[n].cascade );

      return firstChoice.sort();   

    }

    

    setInitData(){
      let init = this.findIndexRef();
      const orderNameselect=[]
      const initNext = init[init.indexOf(this.indexRef)+1]
      for(let x of init){
        orderNameselect.push(this.controls2[x].name);
      }

      // Object.values(this.data.)
      for(let y in orderNameselect){
        this.daftar[y] = this.data.oldData[orderNameselect[y]];
      }
      const xy = this.data.config[initNext].cascade;
      let xyz = xy;
      console.log(xyz);

      for(let j in this.daftar){
        if(j>'0'){
          this.containOpt2[init[j]]=xyz.filter(p=>p[orderNameselect[j]]=== this.daftar[j]);
        }
        console.log(this.containOpt2);
       
       
      }




      console.log('edit',orderNameselect,init,init.indexOf(0));
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
     
     
      let choosen = this.form.get(b).value;
      console.log('select',choosen);
      const z= this.data.config[nextOpt].cascade
      this.optional= z.filter(p=>p[b]=== choosen);
      this.containOpt[nextOpt]=this.optional;
      console.log('apakah berubah', this.optional);
      console.log('apakah masuk', this.containOpt);

      //biar bisa saling chainng, kurang disable , enable udah bisa
      const xy = this.data.config[nextOpt].cascade;
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