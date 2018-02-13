import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'form-radio-button',
    styleUrls: ['form-radiobutton.component.css'],
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

export class FormRadioButtonComponent {
    config: FieldConfig;
    group: FormGroup;
}
