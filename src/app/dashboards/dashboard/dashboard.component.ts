import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboards.service';
import { Response } from '@angular/http';
import { DynamicFormComponent } from './../../core/dynamic-form/dynamic-form.component';
import { Subscription } from 'rxjs/Subscription';

import { Validators } from '@angular/forms';

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




export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  // @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  board: any;
  id: number;
  layout: any = {};
  gridcols = 1;
  dashboard: any;
  onDashboardChanged: Subscription;
  onDashboardChangedBackUp: Subscription;
  // addcompo= 'add'; // coba
  gridCols;// coba
  oldCols: any;
  oldWidget:any=[];
  oldarray=[];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location
  ) { }

  ngOnInit() {

    this.onDashboardChanged = this.dashboardService.onDashboardChanged
      .subscribe(dashboard => {

        //  const temporary = dashboard;
        this.dashboard = dashboard;
        // this.oldarray[0] = dashboard;

        //  const temporary = Object.assign({}, dashboard);
        //   this.old = temporary;
        // console.log('stream',this.dashboard);
        // console.log(this.dashboard.widget);
        // console.log(this.dashboard.typepage);
        // console.log(this.dashboard.widget);
        // console.log('form',this.dashboard.widget[2]);
        // this.gridCols = this.dashboard.gridlist.cols;
        // console.log('BACK',this.location.back());
        // console.log('cek tanggal',new Date());

      });


    
    if (window.innerWidth > 767) {
      // if (this.dashboard.gridlist.cols != this.old.gridlist.cols ){
      //   console.log("#################################################################" );
      //   this.dashboard.gridlist.cols = this.old.gridlist.cols;
      //   this.dashboard.widget = this.old.widget;
      //   this.dashboard.widget.forEach(element => {
      //     element.style.gridtile.cols = 3;
      //   });
      // }
      // console.log(this.old,"######################################################################");

      // console.log("##",this.old);
      this.oldCols = this.dashboard.gridlist.cols;
      this.dashboard.widget.forEach((element, index) => {
        this.oldWidget[index] = element.style.gridtile.cols;  
                 
      });



    } else if (window.innerWidth > 480 && window.innerWidth <= 767) {
      // console.log("::::",this.old);
      this.oldCols = this.dashboard.gridlist.cols;
      
      this.dashboard.gridlist.cols = 3;
      this.dashboard.widget.forEach((element, index) => {
        this.oldWidget[index] = element.style.gridtile.cols;
        console.log("COLSPAN", element.style.gridtile.cols, "1")

        element.style.gridtile.cols = 3;
      });

    } else if (window.innerWidth > 320 && window.innerWidth <= 480) {
      this.dashboard.gridlist.cols = 1;
      this.dashboard.widget.forEach((element, index) => {
        this.oldWidget[index] = element.style.gridtile.cols;
        console.log("COLSPAN", element.style.gridtile.cols, "1")

        element.style.gridtile.cols = 1;
      });

    }

    setTimeout(() => {
      // console.log('Test');
      this.onHeightResize();
    }, 1000);

  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

  }

  ngDoCheck() {
    // console.log(">>::",this.oldarray[0]);   
    // console.log("doCHECK");
    // console.log("rowform:::", this.dashboard.widget[2].style.gridtile.rows);
    // const a = this.dashboard.widget[2].style.gridtile.rows;
    // console.log(a);

    setTimeout(() => {
      // console.log('Test');
      this.onHeightResize();
    }, 2000);
  }



  onTitleChanged(newTitle) {
    //const z = {type: 'stat', style: {gridtile: { cols: 2, rows: 2}}}; // coba
    // this.dashboard.typepage = 'dashboard';
    //this.dashboard.widget.push(z); //  coba
    this.dashboardService.postValue();
    console.log('dahboard: ', newTitle);


  }

  onCaseChanged(caseNew) {
    this.dashboardService.postValue();
    console.log('case', caseNew);
  }


  submit(value: { [name: string]: any }) {
    console.log(value);
    this.dashboardService.postValue();
    this.dashboardService.onTableChanged.next(value);
    console.log('valueform', value);
  }

  //coba
  delCompo(compo) {
    console.log(compo)
    this.dashboard.widget.splice(compo, 1)
    this.dashboardService.postValue();
    // this.addcompo = 'clear';
  }

  saveDefault() {
    this.dashboard.typepage = 'dashboard';
    this.dashboardService.postValue();
  }

  //resize window
  // onResize(event){
  //   // const dashboardcols = this.dashboard.gridlist.cols
  //   this.dashboard.gridlist.cols = (event.target.innerWidth <= 768) ? 1 : this.gridCols ;
  //   console.log('gridlist',this.dashboard.gridlist.cols)    
  // }

  // onResizeColspan(event,id){
  //   this.dashboard.widget[id].style.gridtile.cols = (event.target.innerWidth <= 768) ? 1 : this.dashboard.widget[id].style.gridtile.cols;
  //   console.log('colspan',this.dashboard.widget[id].style.gridtile.cols);
  // }

  goBack() {
    this.location.back();
  }

  // for layout

  onResize(event) {
    console.log("RESIZE");
    console.log(this.dashboard);
    if (event.target.innerWidth > 767) {
      // console.log(this.dashboard);
      // console.log(this.old,"#################################################################");
      // this.dashboard.gridlist.cols = this.old.gridlist.cols;
      // this.dashboard.widget = this.old.widget;
      // this.dashboard.widget.forEach(element => {
      //   element.style.gridtile.cols = 3;
      // });
      console.log("BACK",this.oldCols);
      console.log("OLDwidget", this.oldWidget);
      this.dashboard.gridlist.cols = this.oldCols;
      this.dashboard.widget.forEach((element, index) => {
        
        element.style.gridtile.cols = this.oldWidget[index];
      });


    } else if (event.target.innerWidth > 480 && event.target.innerWidth <= 767) {
      // this.oldarray[0]=this.dashboard.gridlist.cols;
      // this.oldCols = this.dashboard.gridlist.cols;
      // this.oldWidget = this.dashboard.widget[0].style.gridtile.cols;

      this.dashboard.gridlist.cols = 3;
      

      this.dashboard.widget.forEach((element,index)=> {
        // this.oldWidget[index] = element.style.gridtile.cols;
        console.log("COLSPAN", element.style.gridtile.cols, index),

        element.style.gridtile.cols = 3;
      });

    } else if (event.target.innerWidth > 320 && event.target.innerWidth <= 480) {
      // this.oldCols = this.dashboard.gridlist.cols;

      this.dashboard.gridlist.cols = 1;
      this.dashboard.widget.forEach((element,index) => {
        // console.log("COLSPAN", element.style.gridtile.cols, "1")
        // this.oldWidget[index] = element.style.gridtile.cols;
        element.style.gridtile.cols = 1;
      });

    }
  }

  onHeightResize() {
    // let a = document.getElementsByTagName("mat-grid-tile")[];
    // let ab = document.getElementsByClassName("mat-card")[0].scrollHeight;
    // console.log("HEIGHT Resize",ab)
    // console.log("check-row", this.dashboard.widget[5].style.gridtile.rows);
    let a = document.getElementsByTagName("mat-grid-tile");
    let b = document.getElementsByClassName("mat-card");
    // console.log("TES");
    console.log()
    let leng = a.length;
    // console.log("length", leng);
    for (let i = 0; i < leng; i++) {
     
      if (i == 5) {
        // console.log("he:", a[i].clientHeight, "ab:", b[i].scrollHeight)
        
      }

      let he = a[i].clientHeight;
      let ab = b[i].scrollHeight;
      if (he < ab) {
        while (he < ab) {
          this.dashboard.widget[i].style.gridtile.rows += 1;
          he += 100;
          if (i == 5) {
            console.log("LISt",ab,he);
          }
          // console.log("PAKE WHILE");
        }
        console.log('final', ab, he);
      }
      else{
        let a = he-ab
        if(a<15){
          this.dashboard.widget[i].style.gridtile.rows += 0.5;
        }
      }

      

    }
    // console.log;
  }

  ngOnDestroy() {
    this.onDashboardChanged.unsubscribe();
  }



}
