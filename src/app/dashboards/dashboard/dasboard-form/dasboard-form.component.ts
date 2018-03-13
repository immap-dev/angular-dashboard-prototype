import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { FieldConfig} from './models/field-config.interface';
import { FormBuilder, FormGroup} from '@angular/forms';
import { EditFormDialogComponent} from './edit-form-dialog.component';
import { Validators, ValidatorFn } from '@angular/forms';

import { MatTableDataSource,MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dasboard-form',
  templateUrl: './dasboard-form.component.html',
  styleUrls: ['./dasboard-form.component.css']
})
export class DasboardFormComponent implements OnInit, AfterViewInit {
  @Input() config;
  @Input() dashboard;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form: FormGroup;
  get controls() { return this.config.filter(({type}) => type !== 'button'); };
  get value() { return this.form.value; }
  get valid() { return this.form.valid; }

  

  // allProductsTypes = [];
  // allTypes = [];
  // productsAfterChangeEvent = [];
  //  indexOfSelect;

   //table
   // displayedColumns = ['actions'];
   // displayedColumnstwo =[];
   element=[];
   dataSource;  
   // pageOptions = [1, 5, 10];

   
   //Dummmy for cascade select
  // allProducts = [
  //   { name: 'SmallWidget1', type: 'city A' },
  //   { name: 'SmallWidget2', type: 'city A' },
  //   { name: 'SmallWidget3', type: 'city A' },
  //   { name: 'SmallWidget4', type: 'city A' },
  //   { name: 'SmallWidget5', type: 'city F' },
  //   { name: 'SmallWidget6', type: 'city B' },
  //   { name: 'LargeWidget1', type: 'city B' },
  //   { name: 'LargeWidget2', type: 'city C' },
  //   { name: 'LargeWidget3', type: 'city C' },
  //   { name: 'LargeWidget4', type: 'city C' },
  //   { name: 'LargeWidget5', type: 'city D' },
  //   { name: 'LargeWidget6', type: 'city E' },
  // ];
   
  editFormDialogRef: MatDialogRef<EditFormDialogComponent>;

  //cascade var
  indexRef;
  optional;
  thelast;
  containOpt=[];
  daftar =[];
  listValueOfInputSelect=[];
  columnOne=['actions'];
  columnTwo=[];
  dataSourceRaw;
  pageOptions = [1, 5, 10];
  raw;
  constructor( private fb: FormBuilder, private dialog:MatDialog) { }


  	ngOnInit() {
  	  	this.form = this.createGroup();
  	  	console.log('c',this.controls);

       
        // to make first select in form
         this.indexRef = this.findIndexRef()[0];
         this.sortData(this.indexRef);
         this.thelast = this.findIndexRef()[this.findIndexRef().length-1];


        // console.log('fref',this.indexRef);
        // console.log('freflength',this.thelast);
        // //this.config[this.indexRef].data
        // console.log('fa',this.sortData(this.indexRef));

         //cek dataraw
       let filterWidgetForm= this.dashboard.widget.filter(w=> w.type === 'form');
       this.raw = filterWidgetForm[0].dataraw//this.dashboard.widget[2].dataraw;
       
       // console.log('filer-form',filterForm[0].dataraw);

       const keys =Object.keys(this.raw[0]);

       this.dataSourceRaw = new MatTableDataSource(this.raw);

       // console.log('source',this.dataSourceRaw) 
       // this.dataSourceRaw.paginator = this.paginator;
       
       // console.log('cek data raw',this.raw);
       // console.log('key', Object.keys(this.raw[0]));
       // console.log(this.columnOne);

       keys.forEach(key=>{this.columnOne.push(key)});
       keys.forEach(key=>{this.columnTwo.push(key)});

       // console.log('aksion',this.columnOne);

       


       // this.indexOfSelect = this.findSelectIndex();
       // console.log('f', this.findSelectIndex());


  		  // to find a category based on type in data dummy
  	  	// this.allProducts.forEach(element => this.allProductsTypes.push(element.type) ); // not dynamic
  	  	// const name = this.allProductsTypes;	  	
  	   //  this.allProductsTypes = Array.from(new Set(name));
  	   //  console.log('tipe',this.allProductsTypes);

        //table
        // this.controls.forEach(control => {this.displayedColumns.push(control.name)})
        // console.log('first',this.displayedColumns)
        // this.controls.forEach(control => {this.displayedColumnstwo.push(control.name)})      

  	}

    ngAfterViewInit(){     
       this.dataSourceRaw.paginator = this.paginator;

    }



  	createGroup() {
        const group = this.fb.group({});
        this.controls.forEach( control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    //Old
    // createControl(config: FieldConfig) {
    //   const { disabled, validation, value } = config;
    //   return this.fb.control({ disabled, value }, validation);
    // }

   
    createControl(config: FieldConfig) {
        // console.log('create control',config);
        const validat:ValidatorFn[]=[];
        const { disabled, validation, value } = config;

        if(validation){
          console.log('validation',validation);
          validation.forEach(valid =>{
            if(valid==='required'){
              // const a='a';
              validat.push(Validators.required);
            }
            if(valid =='max(3)'){
              console.log('max');
            }
          });
          console.log('change',validat);         
          return this.fb.control({disabled, value},validat);
        } else { 
          console.log('validation tak ada');
          return this.fb.control({disabled, value});
        }        
    }

    // typeChanged() {    	
    	
    //   const b = this.controls[this.indexOfSelect].name;    
    //   const productType = this.form.get(b).value;
    // 	this.productsAfterChangeEvent = this.allProducts.filter(p => p.type === productType);// not dynamic 

    // }

    // findSelectIndex(){
    //   // to find index  of first control that type === select , used for cascade select
    //    const findIndex =  this.controls.map((e) => { if( e.type === 'select'){
    //      return e.type;  
    //    } else{return 'no'}; });
    //  const index = findIndex.indexOf('select');
    //  return index
    // }

    //chain experiment

    findIndexRef(){
      const findIndex =  this.controls.map((e) => { if( e.type === 'select' && e.cascade){
         return e.type;  
       } else{return 'no'}; });
      const selections =findIndex.reduce((r, v, i) => r.concat(v === 'select' ? i : []), [])
      return selections
    }

    sortData(n){
      let choicetipe=[];
      
      const firstChoice = this.config[n].cascade;
      const nameOfSelectInput = this.config[n].name;
      firstChoice.forEach(val=>choicetipe.push(val[nameOfSelectInput]));
      const name = firstChoice;      
      this.config[n].cascade = (Array.from(new Set(choicetipe)));

      console.log('sort',this.config[n].cascade );

      return this.config[n].cascade.sort();   

    }


    selectChange(i){
      console.log('i',i);     

      let controlName = this.controls[i].name;
      let init = this.findIndexRef();// index of type select chaining
      let nextOpt = init[init.indexOf(i)+1];
      const orderNameselect=[]
      for(let x of init){
        orderNameselect.push(this.controls[x].name);
      }

      console.log('order',orderNameselect);
      console.log('init',init); 

      //let initdaftar = init.indexOf(i);// search index from indexin 
     
      // const zz = Object.keys(this.config[i+1].data[i+1]);
      // console.log('zz',zz)   

      let choosen = this.form.get(controlName).value;

      console.log('select',choosen);

      const z= this.config[nextOpt].cascade
      this.optional= z.filter(p=>p[controlName]=== choosen);
      this.containOpt[nextOpt]=this.optional;

      console.log('apakah berubah', this.optional);
      console.log('apakah masuk', this.containOpt);

      //biar bisa saling chainng, kurang disable , enable udah bisa
      // const xy = this.config[nextOpt].cascade;
      // let xyz = xy;

      let cascadeOption = this.config[nextOpt].cascade;

      //cek apakah index ref bukan
      if(i===this.indexRef  ){
        this.daftar =[];
        this.listValueOfInputSelect=[];       
               
        this.daftar[init.indexOf(i)] = choosen;

      } else{
        this.daftar[init.indexOf(i)] = choosen;

        console.log('daftar',this.daftar);
      }

     
      
      for(let j in this.daftar){    
              
        cascadeOption = cascadeOption.filter(p=>p[orderNameselect[j]]=== this.daftar[j])
        console.log('loop',cascadeOption);
      }

      // console.log('xy',xyz);
      console.log('xy',cascadeOption);
      
      this.listValueOfInputSelect[nextOpt] = cascadeOption;

      console.log('opt2',this.listValueOfInputSelect);

      this.toggle(this.config[nextOpt].name);
     

    }

    toggle(name) {
      let control = this.form.get(name)
      // control.disabled ? control.enable() : control.disable();
      if(control.disabled) {
        control.enable() ;
      } 
    }
     
   



    submitForm(){

    	console.log('f2',this.form.value);

     if(this.valid){
      this.element.push(this.value);
      // this.dashboard.widget[2].dataraw.push(this.value);

      this.raw.push(this.value);

      console.log('submit-raw',this.raw);

      this.dataSourceRaw.paginator = this.paginator;
     

      //this.dataSource = new MatTableDataSource(this.element); 

      // this.dataSource.paginator = this.paginator;
      event.preventDefault();
      event.stopPropagation();
      // this.submit.emit(this.value);
      // this.submit.emit(this.dashboard.widget[2].dataraw);
      this.submit.emit(this.raw);
     } else{ console.log('tidak valid')};
      //insert to table
      // this.element.push(this.value);
      // this.dataSource = new MatTableDataSource(this.element); 
      // this.dataSource.paginator = this.paginator;
      // event.preventDefault();
      // event.stopPropagation();
      // this.submit.emit(this.value);
      console.log('element',this.element)
    }


    onDelete(index:number){
        this.element.splice(index,1);
        console.log('after elemen',this.element);
        this.dataSource = new MatTableDataSource(this.element); 
        console.log('delete',index);
    }



    // Dialog

    openDialog(i){
      this.editFormDialogRef = this.dialog.open(EditFormDialogComponent,{
          data:{
            oldData: this.element[i],
            config: this.config,
            // selectOne: this.allProductsTypes,
            // selectTwo: this.allProducts
          }        
      });      
      this.editFormDialogRef.afterClosed().subscribe( newData =>{ 
          if(newData) {
            this.element[i]=newData
            // NB: tambah if , untuk cek apaakah data yg sama seperti data yg baru 
            console.log('o',this.element)
            this.dataSource = new MatTableDataSource(this.element);
          }
            else{} 
      });    
    }

}


