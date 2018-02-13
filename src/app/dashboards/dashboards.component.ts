import { DashboardService } from './dashboards.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DashboardModel} from './dashboard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  pic = '/assets/hush-naidoo-382152.jpg';
  boards = [];
  dashboards: any[];
  
  onDashboardsChanged: Subscription;
  constructor(private dashboardService: DashboardService, private route:Router) { }


  ngOnInit() {
    this.boards = this.dashboardService.dummy;
    this.onDashboardsChanged =
                                this.dashboardService.onDashboardsChange
                                    .subscribe(dashboards => {
                                      this.dashboards = dashboards;
                                      // this.pic = this.dashboards.image;
                                       

                                      // console.log(this.dashboards);
                                    });
  }

  newDashboard(){

    const newDashboard = new DashboardModel({});
    this.dashboardService.createNewDashboard(newDashboard). then(() =>{
      this.route.navigate(['/dashboard/'+newDashboard.id+'/'+ newDashboard.uri])
    })

  }







}
