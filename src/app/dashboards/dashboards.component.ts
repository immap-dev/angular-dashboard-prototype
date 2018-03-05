import { DashboardService } from './dashboards.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DashboardModel} from './dashboard.model';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  pic = '/assets/hush-naidoo-382152.jpg';
  boards = [];
  dashboards: any[];
  title;
  
  onDashboardsChanged: Subscription;
  constructor(private dashboardService: DashboardService, private route:Router, private activatedRoute:ActivatedRoute) { }


  ngOnInit() {
    
    this.onDashboardsChanged =
                                this.dashboardService.onDashboardsChange
                                    .subscribe(dashboards => {
                                      this.dashboards = dashboards;
                                      // this.pic = this.dashboards.image;
                                       

                                      // console.log(this.dashboards);
                                    });
            this.title= this.route.url
            console.log('url',this.title);


  }

  newDashboard(){

    const newDashboard = new DashboardModel({});
    this.dashboardService.createNewDashboard(newDashboard). then(() =>{
      this.route.navigate(['/dashboard/'+newDashboard.id+'/'+ newDashboard.uri])
    })

  }

  







}
