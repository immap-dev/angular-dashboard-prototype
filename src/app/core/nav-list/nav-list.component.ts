import { Component, OnInit, OnDestroy } from '@angular/core';
import {NavService} from './nav.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit, OnDestroy {
  // links = ['home', 'dashboard'];

  navigationModel: any[];
    navigationModelChangeSubscription: Subscription;

  constructor( private navService:NavService) { }

  ngOnInit() {
  	// this.navigationModelChangeSubscription = this.navService.onNavigationModelChanged
  	// 												.subscribe((navModel)=>{
  	// 													this.navigationModel = navModel;
  	// 													console.log(this.navigationModel); 														

  	// 												})
    this.navigationModelChangeSubscription = this.navService.getNavigations()
                                                  .subscribe((response:any)=>{
                                                    this.navigationModel = response;
                                                    console.log('coba');

                                                  })
  }

  ngOnDestroy(){
  	this.navigationModelChangeSubscription.unsubscribe();
  }

}
