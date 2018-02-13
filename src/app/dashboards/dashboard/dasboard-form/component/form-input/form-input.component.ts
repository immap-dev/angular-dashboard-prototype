import {Component, ViewContainerRef} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldConfig} from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'form-input',
    styleUrls: ['form-input.component.css'],
    template: `
    <div [formGroup]="group">
        <mat-form-field class="full-width">
          <input matInput placeholder="{{config.placeholder}}" [formControlName]="config.name" value="" >
        </mat-form-field>
    </div>
  `,
})

export class FormInputComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
// <label>{{ config.label }}</label>
//     <input
//         type="text"
// [attr.placeholder] = "config.placeholder"
// [formControlName] = "config.name" value = "Swimming" >
}
