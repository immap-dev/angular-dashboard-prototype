import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy,Injectable, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {Subscription} from 'rxjs/Subscription';
import { DashboardService } from '../../dashboards.service';





@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})


export class DashboardTableComponent implements OnInit{

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



  constructor(private dashboardService:DashboardService) { }

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

  }
  
  ngOnDestroy(){
    this.sourceTableData.unsubscribe();
  }


  // coba 2


}









