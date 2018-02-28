import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { FieldConfig} from './models/field-config.interface';
import { FormBuilder, FormGroup} from '@angular/forms';
import { EditFormDialogComponent} from './edit-form-dialog.component';

import { MatTableDataSource,MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dasboard-form',
  templateUrl: './dasboard-form.component.html',
  styleUrls: ['./dasboard-form.component.css']
})
export class DasboardFormComponent implements OnInit {
  @Input() locations;
  @Input() config;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form: FormGroup;
  get controls() { return this.config.filter(({type}) => type !== 'button'); };
  get value() { return this.form.value; }

  allProductsTypes = [];
  productsAfterChangeEvent = [];
   indexOfSelect;

   //table
   displayedColumns = ['actions'];
   displayedColumnstwo =[];
   element=[];
   dataSource;   
   pageOptions = [1, 5, 10];

   //dialogtry
    // animal: string;
    // name: string;

   //Dummmy for cascade select
  allProducts = [
    { name: 'SmallWidget1', type: 'city A' },
    { name: 'SmallWidget2', type: 'city A' },
    { name: 'SmallWidget3', type: 'city A' },
    { name: 'SmallWidget4', type: 'city A' },
    { name: 'SmallWidget5', type: 'city F' },
    { name: 'SmallWidget6', type: 'city B' },
    { name: 'LargeWidget1', type: 'city B' },
    { name: 'LargeWidget2', type: 'city C' },
    { name: 'LargeWidget3', type: 'city C' },
    { name: 'LargeWidget4', type: 'city C' },
    { name: 'LargeWidget5', type: 'city D' },
    { name: 'LargeWidget6', type: 'city E' },
  ];
   
  editFormDialogRef: MatDialogRef<EditFormDialogComponent>;
  
  constructor( private fb: FormBuilder, private dialog:MatDialog) { }


	ngOnInit() {
	  	this.form = this.createGroup();
	  	console.log('c',this.controls);
	 

     

     this.indexOfSelect = this.findSelectIndex();
     console.log('f', this.findSelectIndex());


		  // to find a category based on type in data dummy
	  	this.allProducts.forEach(element => this.allProductsTypes.push(element.type) ); // not dynamic
	  	const name = this.allProductsTypes;	  	
	    this.allProductsTypes = Array.from(new Set(name));
	    console.log('tipe',this.allProductsTypes);

      //table
      this.controls.forEach(control => {this.displayedColumns.push(control.name)})
      this.controls.forEach(control => {this.displayedColumnstwo.push(control.name)})

	   
	}

  	createGroup() {
        const group = this.fb.group({});
        this.controls.forEach( control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

   
    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({disabled, value}, validation);
    }

    typeChanged() {
    	
    	const a =this.controls[0].name;
      const b = this.controls[this.indexOfSelect].name;
    	// console.log('a',a);
     //  console.log('b',b);
    	// console.log('p1', this.form.get(a).value);

    	// const productType = this.form.get(a).value;
      const productType = this.form.get(b).value;
    	this.productsAfterChangeEvent = this.allProducts.filter(p => p.type === productType); // not dynamic

    	// console.log('change',this.productsAfterChangeEvent);

    	// console.log('tipe2',this.allProductsTypes);

    }

    findSelectIndex(){
      // to find index  of first control that type === select , used for cascade select
       const findIndex =  this.controls.map((e) => { if( e.type === 'select'){
         return e.type;  
       } else{return 'bukan'}; });
     const index = findIndex.indexOf('select');
     return index
    }

    submitForm(){
    	console.log('f2',this.form.value);

      //insert to table
      this.element.push(this.value);
      this.dataSource = new MatTableDataSource(this.element); 
      this.dataSource.paginator = this.paginator;
      event.preventDefault();
      event.stopPropagation();
      this.submit.emit(this.value);
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
            selectOne: this.allProductsTypes,
            selectTwo: this.allProducts
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


