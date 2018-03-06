import { Component, OnInit, Input,AfterViewInit,OnChanges } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges{
	@Input() title:string;
  constructor() { }

  ngOnInit() {
    console.log('tipe', this.title);
  	// this.title = this.title.replace(/\//g,'');
  	console.log('filter',this.title);
  	
  } 

  ngOnChanges(){
    this.title = this.title.replace(/\//g,'');
    console.log('filtera',this.title);
  }



}
