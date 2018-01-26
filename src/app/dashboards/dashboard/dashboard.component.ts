import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboards.service';
import {Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  board: any;
  id: number;
  layout: any = {} ;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBoard();
   this.onLayout();
  }

  getBoard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.board = this.dashboardService.getBoard(id);

  }

  onLayout() {
    this.dashboardService.getOnLayout().subscribe((response: Response) => {
      this.layout = response.json();
      console.log(this.layout.widget);
    },
      (error) => console.log(error));

  }


}
