import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboards.service';
import {Response } from '@angular/http';
import { DynamicFormComponent } from './../../core/dynamic-form/dynamic-form.component';
import {Subscription} from 'rxjs/Subscription';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})




export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  board: any;
  id: number;
  layout: any = {} ;
  gridcols = 1;
  dashboard: any;
  onDashboardChanged: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location
  ) { }

  ngOnInit() {

   this.onDashboardChanged = this.dashboardService.onDashboardChanged
                                 .subscribe(dashboard => {
                                    this.dashboard = dashboard;
                                    console.log('stream',this.dashboard);
                                    // console.log(this.dashboard.widget);
                                 });
  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

  }

  onTitleChanged(newTitle) {    
      
      this.dashboardService.postValue();
      console.log('dahboard: ', newTitle);
      
 }

 onCaseChanged(caseNew){
    this.dashboardService.postValue();
    console.log('case', caseNew);
 }


  submit(value: { [name: string]: any }) {
    console.log(value);
    this.dashboardService.onTableChanged.next(value);
  }

  ngOnDestroy() {
    this.onDashboardChanged.unsubscribe();
  }



}
