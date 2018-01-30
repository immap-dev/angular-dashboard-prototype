import { FormGroup } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';
import { FieldConfig } from './../../model/field-config.interface';
import { Field } from './../../model/field.interface';

@Component({
    selector: 'form-radio-button',
    styleUrls: ['form-radio.component.ts'],
    template:
    `<div
      [formGroup] = "group" >
        <mat-radio-group  [formControlName]="config.name" class = "full-width">
          <mat-radio-button  *ngFor="let option of config.options" [value]="option">
            {{option}}
          </mat-radio-button>
        </mat-radio-group>
    </div>`

})

export class FormRadioButtonComponent implements Field {
    config: FieldConfig;
    group: FormGroup;

}
