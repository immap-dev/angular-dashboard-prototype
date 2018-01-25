import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard-form',
  templateUrl: './dasboard-form.component.html',
  styleUrls: ['./dasboard-form.component.css']
})
export class DasboardFormComponent implements OnInit {
  @Input() locations;
  constructor() { }

  ngOnInit() {
  }

}
