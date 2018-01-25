import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dasboard-title',
  templateUrl: './dasboard-title.component.html',
  styleUrls: ['./dasboard-title.component.css']
})
export class DasboardTitleComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
