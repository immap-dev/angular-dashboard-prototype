import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title;
  constructor(private route: Router) { }

  ngOnInit() {
  	this.title= this.route.url;
  	console.log('home',this.title);
  }

}
