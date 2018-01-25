import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard-stat',
  templateUrl: './dasboard-stat.component.html',
  styleUrls: ['./dasboard-stat.component.css']
})
export class DasboardStatComponent implements OnInit {
  @Input() stats;
  constructor() { }

  ngOnInit() {
  }

}
