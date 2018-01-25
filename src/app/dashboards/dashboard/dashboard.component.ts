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
  layout: any ;

//   layout = {cols: 4, rows: 2, color: 'lightblue'};
//   active = false;
//   layoutarray = [{ cols: 4, rows: 2},
//                  { cols: 3, rows: 2},
//                  { cols: 4, rows: 2} ];

//   dashboardcontens = [
//     {
//       type: 'title',
//       style: {
//         gridtile: {
//           cols: 4, rows: 2
//         }
//       }
//     },
//     {
//       type: 'stat',
//       style: {
//         gridtile: {
//           cols: 4, rows: 1
//         }
//       }
//     },
//     {
//       type: 'form',
//       style: {
//         gridtile: {
//           cols: 4, rows: 2
//         }
//       }
//     },
//     {
//       type: 'map',
//       style: {
//         gridtile: {
//           cols: 4, rows: 7
//         }
//       }
//     }
// ];

// DUMMY mimicking json
dashboardlayout = {
  'gridlist': {
      'cols': 4
  },
  'widget': [
    {
      type: 'title',
      style: {
        gridtile: {
          cols: 4, rows: 2
        }
      }
    },
    {
      type: 'stat',
      style: {
        gridtile: {
          cols: 4, rows: 1
        }
      }
    },
    {
      type: 'form',
      style: {
        gridtile: {
          cols: 4, rows: 2
        }
      }
    },
    {
      type: 'map',
      style: {
        gridtile: {
          cols: 4, rows: 7
        }
      }
    }

  ]
};

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBoard();
    // this.layout = this.dashboardService.getLayout().subscribe();
    // console.log(this.layout);
    // this.dashboardService.getLayout().subscribe(val => console.log(val));
    // this.onLayout();
  }

  getBoard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.board = this.dashboardService.getBoard(id);

  }

  // onLayout() {
  //   this.dashboardService.getOnLayout().subscribe((response: Response) => {
  //     this.layout = response.json();
  //     console.log(this.layout);
  //   },
  //     (error) => console.log(error));
  // }









}
