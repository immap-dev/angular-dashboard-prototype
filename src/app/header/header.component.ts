import { Component, OnInit, Input,AfterViewInit,OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboards/dashboards.service';
import {Subscription} from 'rxjs/Subscription';
import { Router, ActivatedRoute, UrlSegment,NavigationEnd,RouterState } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers:[DashboardService]
})
export class HeaderComponent implements OnInit,OnChanges{
	@Input() title:string;
  back = true;
  onDashboardChanged: Subscription;
  dashboard: any;
  date;
  id;
  constructor(private location: Location, private dashboardService: DashboardService, private route:Router, private activatedRoute:ActivatedRoute) {
    this.onDashboardChanged = this.dashboardService.onDashboardChanged
                                 .subscribe(dashboard => {
                                    this.dashboard = dashboard;
                                    this.date = this.dashboard.date;
                                    console.log('streamHeader',this.dashboard);
                                    

                                 });   
  }

  ngOnInit() {
    console.log('tipe', this.title);
  	// this.title = this.title.replace(/\//g,'');
  	console.log('filter',this.title);
    console.log('BACKUP',this.location);
    this.date = new Date('1/17/16'); 

  	
  } 

  ngOnChanges(){
    this.title = this.title.replace(/\//g,'');
    // console.log('filtera',this.title);

    // to check in dahbord page or not
    if(this.title == 'dashboard' || this.title === 'home'){
      this.back = false;
    }
    else {
      this.back = true;
    }    

  
    this.route.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {               
        let split = event.url.split('/').length;
        let currentUrlPath = event.urlAfterRedirects.split('/')[split-2];
        this.id = currentUrlPath;
         console.log('RAWRID',this.id);          
      }      
    });
    
    // to get date

    if(this.id !== undefined){
      this.dashboardService.getDashboard(this.id)
                            // .then( res =>{ 
                            //       if(res == null || res.date == null){
                            //           this.date = new Date();
                            //         } 
                            //       else{this.date = res.date}
                            // });                                  
    }

    
    // this.onDashboardChanged = this.dashboardService.onDashboardChanged
    //                              .subscribe(dashboard => {
    //                                 this.dashboard = dashboard;
    //                                 console.log('streamHeader',this.dashboard);
                                    

    //                              });                 
    
  }


  goBack(){
      // this.location.back();
      console.log('BACKUP',this.location);

      //alternative
      const state: RouterState = this.route.routerState;

       console.log("RUTE",);
      this.route.navigate(['../dashboard'], { relativeTo: this.activatedRoute });

  }





}
