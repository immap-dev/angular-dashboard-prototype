import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EditListComponent} from './edit-list.component';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
 search:boolean= false;
  @Input() list; 
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }
   editListDialog: MatDialogRef<EditListComponent>;

  ngOnInit() {
    console.log("LISTPRIME", typeof this.list.updated, typeof new Date());
  }

  onSearch(){
    this.search = !this.search;
  }

  openDialog(i): void {
    this.editListDialog = this.dialog.open(EditListComponent, {
      width: '250px',
      data: this.list[i]
      
    });

    this.editListDialog.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed',result);
      this.list[i] = result;
      this.submit.emit(this.list);
      }
      else{
        
      }
      
      
    });
  }

}
