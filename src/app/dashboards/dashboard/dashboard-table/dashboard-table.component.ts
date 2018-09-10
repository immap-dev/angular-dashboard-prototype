import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy,Injectable, EventEmitter,OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {Subscription} from 'rxjs/Subscription';
import { DashboardService } from '../../dashboards.service';

// coba 3
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})


export class DashboardTableComponent implements OnInit,AfterViewInit {

  @Input()
  dashboard;
  // data table
  @Input()
  displaytable;

  // header table
  @Input()
  displayheader;

  // to listen change in paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // source from service
  sourceTableData: Subscription;


  //baru
  displayTabletwo=[];
  // displayTabletwo:Array<any>=[];
  // displayHeadertwo=['actions'];
  displayHeadertwo=[];
  // d=['actions'];

  pageOptions = [1, 5, 10];

  // dataSource = <any>[];

  //baru
  dataSourcetwo = <any>[];

  // coba 3
  public invoiceForm: FormGroup;

  raw;

  //icon  link
  tabledata= <any>[];
  column=[];
  fieldType;
  c;d;


  constructor(private dashboardService:DashboardService, private _fb: FormBuilder) { }

  ngOnInit() {
   // this.dataSource = new MatTableDataSource(this.displaytable);

    // this.displayedColumns = this.displayheader;
    // console.log('data:' + this.displaytable);

    //baru
    // let filterWidgetForm= this.dashboard.widget.filter(w=> w.type === 'form');
    // this.raw = filterWidgetForm[0].dataraw;
    // const keys =Object.keys(this.raw[0]);
    // this.displayHeadertwo = keys;

    //    this.dataSourcetwo = new MatTableDataSource(this.raw);
    //    this.dataSourcetwo.sort = this.sort;
       // this.dataSourcetwo.paginator = this.paginator; 

    // this.sourceTableData = this.dashboardService.onTableChanged.subscribe(table => {
    //                         this.displayTabletwo.push(table);
    //                         this.dataSourcetwo = new MatTableDataSource(this.displayTabletwo);
                                                     
    //                         this.displayHeadertwo = Object.keys(table);
    //                         // this.displayHeadertwo.push(...this.d);                          
    //                         console.log(this.displayHeadertwo);
    //                         // console.log(this.d);

    //                         this.dataSourcetwo.sort = this.sort;
    //                         this.dataSourcetwo.paginator = this.paginator;                            
    //                       }) 

    // NOT USING IT
     // this.sourceTableData = this.dashboardService.onDashboardChanged.subscribe(dashboard => {
                            
     //                        // this.dataSourcetwo = new MatTableDataSource(this.displayTabletwo);
     //                         let filterWidgetForm= dashboard.widget.filter(w=> w.type === 'form');
     //                         this.raw = filterWidgetForm[0].dataraw;
     //                         this.dataSourcetwo = new MatTableDataSource(this.raw);
     //                         const keys = Object.keys(this.raw[0]);                        
     //                        this.displayHeadertwo = keys//Object.keys(table);
                            

     //                        this.dataSourcetwo.sort = this.sort;
     //                        this.dataSourcetwo.paginator = this.paginator ;                            
     //                      }) 
     // NOT USING IT END


     // this.invoiceForm = this._fb.group({
     //    itemRows: this._fb.array([this.initItemRows()])
     //  });
     // console.log("TABLEVAR",ELEMENT_DATA[0].position.val);
     // this.tabledata = new MatTableDataSource(ELEMENT_DATA); 
     // console.log("TABLEVAR",this.tabledata);
     // this.tabledata.sort = this.sort;
     // this.column = Object.keys(ELEMENT_DATA[0]);
     // console.log('KEYS',this.column);
     // ELEMENT_CONFIG.forEach(x => console.log('CONFIG',x));
     // this.c= ELEMENT_CONFIG;
     // this.d=ELEMENT_DATA;
     console.log('TABLE',this.dashboard.widget);
     this.dashboard.widget.forEach(x=>{if(x.type ==='table'){
       this.c = x.table.tableConfig;
       this.column = Object.keys(x.table.tableData[0]); 
       this.tabledata = new MatTableDataSource(x.table.tableData);
       this.tabledata.sort = this.sort;
       console.log(x.table)}});
     

  }

  ngAfterViewInit(){
     // this.dataSourcetwo = new MatTableDataSource(this.raw);
     //  this.dataSourcetwo.paginator = this.paginator; 
      this.tabledata.paginator = this.paginator;
      this.tabledata.sort = this.sort;

  }

  ngOnChanges(){
    
  }
  
  ngOnDestroy(){
    // this.sourceTableData.unsubscribe();
  }


  // table 2

  // displayedColumns = ['position', 'name', 'weight', 'symbol','actionsColumn'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // editmode = false;

  // onEditMode(){
  //   this.editmode =true;
  //   console.log(this.editmode);
  // }

  // onClearMode(){
  //    this.editmode =false;
  // }

  //coba3

   // initItemRows() {
   //      return this._fb.group({
   //          itemname: [''],
   //          itemid: [''],
   //      });
   //  }

   //   addNewRow() {
   //      const control = <FormArray>this.invoiceForm.controls['itemRows'];
   //      control.push(this.initItemRows());
   //  }

   //  deleteRow(index: number) {
   //      const control = <FormArray>this.invoiceForm.controls['itemRows'];
   //      control.removeAt(index);
   //  }

}

const ELEMENT_CONFIG = [
  {name :'cluster', type:'text'},
  {name :'organization', type:'textLink'},
  {name :'user', type:'text'},
  {name :'contact', type:'text'},
  {name :'title', type:'textLink'},
  {name :'goto', type:'iconLink'},
  {name :'status', type:'icon'},
];

const ELEMENT_DATA = [
  { 
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'warn',icon:'query_builder',type:'icon'}
  },
  {
    cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'accent',icon:'query_builder',type:'icon'}
  },
  { 
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}},
  { 
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  { 
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  { 
    cluster: {val:'Health'}, 
    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
    user: {val:'HealthTPO'},
    contact: {val:'Health@health.com'},
    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/apk'}, 
    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
    status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
  {
   cluster:{val:'Health'}, 
   organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
   user: {val:'HealthTPO'},
   contact: {val:'Health@health.com'},
   title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
   goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
   status: {color:'primary',icon:'query_builder',type:'icon'}
  },
 
];

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
   
// ];

// const ELEMENT_DATA = [
//   {position: 1, name: 'Hydrogen', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 2, name: 'Helium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 3, name: 'Lithium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 4, name: 'Beryllium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 5, name: 'Boron', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 6, name: 'Carbon', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 7, name: 'Nitrogen', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 8, name: 'Oxygen', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 9, name: 'Fluorine', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 10, name: 'Neon', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 11, name: 'Sodium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 12, name: 'Magnesium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 13, name: 'Aluminum', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 14, name: 'Silicon', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 15, name: 'Phosphorus', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 16, name: 'Sulfur', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 17, name: 'Chlorine', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 18, name: 'Argon', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 19, name: 'Potassium', weight: 'https://material.angular.io/components/icon/api', symbol: 'query_builder'},
//   {position: 20, name: 'Calcium', weight: 'home', symbol: 'query_builder'},
// ];


// const ELEMENT_DATA = [
//   { 
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'warn',icon:'query_builder',type:'icon'}
//   },
//   {
//     cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'accent',icon:'query_builder',type:'icon'}
//   },
//   { 
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}},
//   { 
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   { 
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   { 
//     cluster: {val:'Health', type:'text'}, 
//     organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//     user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//     title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//     goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//     status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
//   {
//    cluster:{val:'Health', type:'text'}, 
//    organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api',type:'textLink'},
//    user: {val:'HealthTPO', type:'text'},contact: {val:'Health@health.com', type:'text'},
//    title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api',type:'textLink'}, 
//    goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch',type:'iconLink'}, 
//    status: {color:'primary',icon:'query_builder',type:'icon'}
//   },
 
// ];
