import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboards.service';
import {Response } from '@angular/http';
import { DynamicFormComponent } from './../../core/dynamic-form/dynamic-form.component';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})




export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  board: any;
  id: number;
  layout: any = {} ;
  gridcols = 1;
  // ELEMENT_DATA: Element[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  //   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  //   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  //   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  //   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  //   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  //   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  //   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  //   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  //   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  // ];

  // dummy data config
  // config = [
  //   {
  //     type: 'input',
  //     label: 'Full name',
  //     name: 'name',
  //     placeholder: 'Enter your name',
  //   },
  //   {
  //     type: 'input',
  //     label: 'Your Hobby',
  //     name: 'hobby',
  //     placeholder: 'Enter your Hobby',
  //   },
  //   {
  //     type: 'select',
  //     label: 'Favourite food',
  //     name: 'food',
  //     options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
  //     placeholder: 'Select an option',
  //   },
  //   {
  //     type: 'textarea',
  //     label: 'Tell me About You',
  //     name: 'description',
  //     cols: 20,
  //     rows: 5

  //   },
  //   {
  //     label: 'Submit',
  //     name: 'submit',
  //     type: 'button',
  //   },
  // ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBoard();
   this.onLayout();
    // this.dashboardService.updateLayout();
  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

  }

  getBoard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.board = this.dashboardService.getBoard(id);

  }

  onLayout() {
    this.dashboardService.getOnLayout().subscribe((response: Response) => {
      // this.layout = response.json(); // http
      this.layout = response; // httpclient
      this.gridcols = this.layout.gridlist.cols;
      console.log(this.layout.gridlist.cols);
    },
      (error) => console.log(error));

  }




  formSubmitted(value) {
    console.log(value);
    


  }



}
