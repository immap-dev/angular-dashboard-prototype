import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-downlod-button',
  templateUrl: './downlod-button.component.html',
  styleUrls: ['./downlod-button.component.css']
})
export class DownlodButtonComponent implements OnInit {
	  @Input() buttons;
    open= false;
    listButton;
  onOpen(){
    this.open = !this.open;
    // console.log(this.open);
  }

  constructor() { }

  ngOnInit() {
   this.listButton= this.buttons;
   console.log('db',this.listButton[1].icon);
   console.log(this.open);
  }

}

// const DOWN=[
//   {
//     icon:'show_chart',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'attach_money',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'attach_file',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'assignment',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'assignment_late',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'assignment_turned_in',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'picture_as_pdf',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
//   {
//     icon:'group',
//     tooltip:'Download Beneficiaries CSV',
//     action:'button'
//   },
// ]
