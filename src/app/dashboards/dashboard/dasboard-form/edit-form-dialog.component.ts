import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector:'edit-form-dialog',
  templateUrl: './edit-form-dialog.component.html'
})
export class EditFormDialogComponent implements OnInit{
  
  constructor(  private formBuilder: FormBuilder ,private editDialog: MatDialogRef<EditFormDialogComponent>
   ){}
    
 ngOnInit(){

 }

  onNoClick(): void {
    
  }
}