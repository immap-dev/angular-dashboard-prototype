import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy,Injectable, EventEmitter } from '@angular/core';
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


export class DashboardTableComponent implements OnInit {

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



  constructor(private dashboardService:DashboardService, private _fb: FormBuilder) { }

  ngOnInit() {
   // this.dataSource = new MatTableDataSource(this.displaytable);

    // this.displayedColumns = this.displayheader;
    // console.log('data:' + this.displaytable);

    //baru
    this.sourceTableData = this.dashboardService.onTableChanged.subscribe(table => {
                            this.displayTabletwo.push(table);
                            this.dataSourcetwo = new MatTableDataSource(this.displayTabletwo);
                                                     
                            this.displayHeadertwo = Object.keys(table);
                            // this.displayHeadertwo.push(...this.d);                          
                            console.log(this.displayHeadertwo);
                            // console.log(this.d);

                            this.dataSourcetwo.sort = this.sort;
                            this.dataSourcetwo.paginator = this.paginator;                            
                          }) 

     // this.invoiceForm = this._fb.group({
     //    itemRows: this._fb.array([this.initItemRows()])
     //  }); 

  }
  
  ngOnDestroy(){
    this.sourceTableData.unsubscribe();
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









