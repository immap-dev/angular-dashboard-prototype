import { Component, OnInit, OnDestroy, AfterViewInit,Input } from '@angular/core';
import {NavService} from './nav.service';
import {Subscription} from 'rxjs/Subscription';
import { DashboardService } from '../../dashboards/dashboards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit, OnDestroy {
  // links = ['home', 'dashboard'];

  

  navigationModel: any[];
    navigationModelChangeSubscription: Subscription;
  myVar = false;
  buka = false;
  dashboards: any[];
  onDashboardsChanged: Subscription;
  check;
  constructor( 
              private navService:NavService,
              private dashboardService: DashboardService,
              private router: Router) { }

  ngOnInit() {
  	// this.navigationModelChangeSubscription = this.navService.onNavigationModelChanged
  	// 												.subscribe((navModel)=>{
  	// 													this.navigationModel = navModel;
  	// 													console.log(this.navigationModel); 														

  	// 												})
    this.navigationModelChangeSubscription = this.navService.getNavigations()
                                                  .subscribe((response:any)=>{
                                                    this.navigationModel = response;
                                                    console.log(this.navigationModel);
                                                    console.log('coba');

                                                  });
    this.dashboardService.getDashboards().then(dashboards=>
      {console.log('NAV',dashboards)
      this.dashboards = dashboards;
    })
  }

  select(a:string){
    console.log("SIDE",a);
    
    this.dashboards.forEach(x => 
      {if(x.title.facility === a){
        console.log('cek', typeof x.id);
        // let z = x.id.toString();
     
        this.router.navigateByUrl("dashboard/"+x.id+"/"+x.uri);
      }

        
      } )

  }

  onOnpen(i){
    
    // this.myVar =!this.myVar;
    this.navigationModel[i].hide = !this.navigationModel[i].hide;
    console.log("OPEN",i,this.navigationModel[i].hide);

  }
  
  ngOnDestroy(){
  	this.navigationModelChangeSubscription.unsubscribe();
  }

}
