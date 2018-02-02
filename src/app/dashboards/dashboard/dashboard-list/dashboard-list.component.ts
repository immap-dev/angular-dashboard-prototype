import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @Input() list;

  // folders = [
  //   {
  //     name: 'Photos',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Recipes',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Work',
  //     updated: new Date('1/28/16'),
  //   }
  // ];
  // notes = [
  //   {
  //     name: 'Vacation Itinerary',
  //     updated: new Date('2/20/16'),
  //   },
  //   {
  //     name: 'Kitchen Remodel',
  //     updated: new Date('1/18/16'),
  //   }
  // ];

  constructor() { }

  ngOnInit() {
  }

}
