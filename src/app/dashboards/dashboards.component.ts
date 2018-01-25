import { DashboardService } from './dashboards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  pic = 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Create_with_plus_mail_layer_add_vector_stock.png';
  boards = [];
  constructor(private dashboardService: DashboardService) { }


  ngOnInit() {
    this.boards = this.dashboardService.dummy;
  }







}
