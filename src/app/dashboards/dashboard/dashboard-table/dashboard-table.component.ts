import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})


export class DashboardTableComponent implements OnInit, AfterViewInit {

  // data table
  @Input()
  displaytable;

  // header table
  @Input()
  displayheader;

  // to listen change in paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  pageOptions = [1, 5, 10];

  dataSource = <any>[];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.displaytable);
    // this.displayedColumns = this.displayheader;
    console.log('data:' + this.displaytable);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}


