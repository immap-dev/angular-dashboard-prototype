import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downlod-button',
  templateUrl: './downlod-button.component.html',
  styleUrls: ['./downlod-button.component.css']
})
export class DownlodButtonComponent implements OnInit {
	  open= false;
  onOpen(){
    this.open = !this.open;
  }

  constructor() { }

  ngOnInit() {
  }

}
